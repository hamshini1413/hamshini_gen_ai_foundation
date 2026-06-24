#!/usr/bin/env python3
"""Simple CLI to call the resume evaluator prototype.

Usage examples:
  python main.py evaluate --job-file ../gen_ai_foundation/README.md --resume-file my_resume.txt
  python main.py generate --job-text "Looking for a Python dev" --resume-file my_resume.txt --name "Alice"
"""
import argparse
import json
import os
import sys


def read_input(file_path: str | None, text: str | None) -> str:
	if file_path:
		with open(file_path, "r", encoding="utf-8") as f:
			return f.read()
	return text or ""


def import_evaluator_module():
	# Add the prototype evaluator directory to path (workspace sibling)
	here = os.path.abspath(os.path.dirname(__file__))
	workspace_root = os.path.abspath(os.path.join(here, ".."))
	eval_dir = os.path.join(workspace_root, "gen_ai_foundation", "resume_evaluator")
	if eval_dir not in sys.path:
		sys.path.insert(0, eval_dir)
	try:
		import evaluator
		return evaluator
	except Exception as exc:  # pragma: no cover - helpful error for users
		print(f"Failed to import evaluator from {eval_dir}: {exc}", file=sys.stderr)
		sys.exit(1)


def cmd_evaluate(args):
	evaluator = import_evaluator_module()
	job = read_input(args.job_file, args.job_text)
	resume = read_input(args.resume_file, args.resume_text)
	if not job or not resume:
		print("Provide --job-file/--job-text and --resume-file/--resume-text", file=sys.stderr)
		sys.exit(2)
	result = evaluator.evaluate_resume(job, resume)
	print(json.dumps(result, indent=2))


def cmd_generate(args):
	evaluator = import_evaluator_module()
	job = read_input(args.job_file, args.job_text)
	resume = read_input(args.resume_file, args.resume_text)
	if not job or not resume:
		print("Provide --job-file/--job-text and --resume-file/--resume-text", file=sys.stderr)
		sys.exit(2)
	tailored = evaluator.generate_tailored_resume(job, resume, args.name)
	print(tailored)


def build_parser() -> argparse.ArgumentParser:
	p = argparse.ArgumentParser(description="Resume evaluator CLI")
	sub = p.add_subparsers(dest="command", required=True)

	pe = sub.add_parser("evaluate", help="Evaluate resume against a job description")
	pe.add_argument("--job-file", help="Path to job description file")
	pe.add_argument("--job-text", help="Job description text")
	pe.add_argument("--resume-file", help="Path to resume text file")
	pe.add_argument("--resume-text", help="Resume text")
	pe.set_defaults(func=cmd_evaluate)

	pg = sub.add_parser("generate", help="Generate a tailored resume draft")
	pg.add_argument("--job-file", help="Path to job description file")
	pg.add_argument("--job-text", help="Job description text")
	pg.add_argument("--resume-file", help="Path to resume text file")
	pg.add_argument("--resume-text", help="Resume text")
	pg.add_argument("--name", help="Candidate name (optional)")
	pg.set_defaults(func=cmd_generate)

	return p


def main():
	parser = build_parser()
	args = parser.parse_args()
	args.func(args)


if __name__ == "__main__":
	main()


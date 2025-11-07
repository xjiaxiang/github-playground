import {danger, warn, message} from "danger";

// print pr summary info
const totalChanges = danger.github.pr.additions + danger.github.pr.deletions;

message("PR Size Analysis");
message(`Additions: ${danger.github.pr.additions}`);
message(`Deletions: ${danger.github.pr.deletions}`);
message(`Total Changes: ${totalChanges}`);

if (totalChanges > 1000) {
	warn(
		"⚠️ Large PR detected. Consider splitting it into smaller PRs for easier review."
	);
} else if (totalChanges > 500) {
	warn("💡 **Medium PR**: Make sure reviewers have enough time to review.");
} else {
	message("✅ **PR Size**: Looks good!");
}

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
	warn(
		"⚠️ Please add a more detailed description to your PR. This helps reviewers understand the changes better."
	);
}

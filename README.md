# happy-plant

## Checkout
### Generate Personal Access Token
- https://gitlab.hof-university.de/-/user_settings/personal_access_tokens
- add new token, save it somewhere (you only see it on creation)

### Clone the repository
- repository url: `https://<user>@gitlab.hof-university.de/kreiner/happy-plant.git`
    - Command Line (e.g. in VS Code): `git clone <repository url>`
    - Sublime Merge: File > Clone Repository > Source Url = repository url
- Windows Git Credential Manager will ask for Access Token

## Git Usage
- fetch from origin, switch on main and pull
- create a new branch from main 
    - naming conventions: lower-case-foo-branch
- checkout this branch and publish it (happens automatically on pushes)
- use conventional commit messages:
    - prefix messages with `feat:` (new feature), `refac:` (refactoring change), `fix:` (bug fix), `styles:` (cosmetic changes), `docs:` (documentation tasks)
    - example: "feat: implemented plant", "refac: optimized plant structure", "fix: correctly store new plant on user", ...
- when task is finished, create merge request in GitLab Web Interface and select a reviewer
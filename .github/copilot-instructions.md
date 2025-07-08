# GitHub Copilot Instructions

## Core Behavior Guidelines

### 1. Subject Deepening
- Always engage in deep, thoughtful discussions about technical topics
- Ask probing questions to understand the user's level of knowledge and goals
- Provide detailed explanations with examples and practical applications
- Suggest related concepts, tools, or technologies that might be relevant
- Encourage exploration of edge cases and advanced scenarios
- Offer multiple perspectives or approaches to problems

### 2. Documentation Creation
- After each meaningful interaction about a technical subject, create or update documentation in the `docs/` folder
- Structure documentation using appropriate subdirectories based on the subject matter
- Follow the existing documentation structure and categories present in the workspace
- Create new subdirectories if the subject doesn't fit existing categories

### Documentation Structure Guidelines
- Use clear, descriptive filenames with `.md` extension
- Include proper frontmatter if following Docusaurus conventions
- Structure content with:
  - Brief introduction/overview
  - Key concepts discussed
  - Practical examples or code snippets
  - Links to relevant resources
  - Notes from our conversation

### Subject Categories
Based on existing documentation structure, organize content into appropriate categories:
- `building-websites/` - Web development, frameworks, deployment
- `dev-environnement/` - Development tools, editors, workflow
- `electronic-stuff/` - Hardware, embedded systems, electronics
- `gaming/` - Game development, gaming culture, industry
- `learning-languages/` - Programming languages, syntax, paradigms
- `misc/` - General topics that don't fit other categories
- `networks/` - Networking, protocols, infrastructure
- `os/` - Operating systems, system programming

### Documentation Workflow
1. During conversations, take note of key insights and learning points
2. After covering a substantial topic, create or update relevant documentation
3. Use the existing `_category_.json` files as reference for subdirectory organization
4. Ensure documentation is practical and actionable
5. Include code examples, commands, or configuration snippets where relevant

## Communication Style
- Be thorough but not overwhelming
- Use examples to illustrate concepts
- Provide context for why something matters
- Ask clarifying questions when needed
- Suggest next steps or related topics to explore

## File Management & Error Prevention

### Pre-Flight Checks
Before creating or modifying any file:
1. **Verify directory structure**: Use `list_dir` to check if target directories exist
2. **Check existing files**: Use `file_search` or `grep_search` to avoid duplicates
3. **Validate file paths**: Ensure absolute paths are correct for the workspace
4. **Review existing content**: Use `read_file` to understand current file structure before modifications

### File Creation Protocol
1. **Use structured approach**: Always create files through tools, not manual terminal commands
2. **Validate before writing**: Check directory structure and naming conventions
3. **Template consistency**: Follow existing file patterns in the workspace
4. **Content validation**: Ensure proper frontmatter and Markdown structure

### Error Prevention Strategies
- **Double-check file paths**: Always use absolute paths starting with `c:\Users\guill\Documents\GitHub\Thopterulu.github.io\`
- **Verify directory existence**: Create directories if they don't exist before file creation
- **Follow naming conventions**: Use lowercase, hyphens for spaces, descriptive names
- **Validate file extensions**: Ensure `.md` for documentation, appropriate extensions for other files
- **Check for conflicts**: Search for existing files with similar names or content

### File Operation Best Practices
- **Use appropriate tools**: Prefer `create_file` over terminal commands for file creation
- **Batch operations**: Group related file operations together
- **Incremental updates**: Make small, focused changes rather than large rewrites
- **Content verification**: Read back created files to ensure accuracy
- **Backup awareness**: Understand that files in git repositories have version control

### Terminal Usage Guidelines
When terminal operations are necessary:
- **Verify working directory**: Always check current directory before file operations
- **Use absolute paths**: Minimize path-related errors
- **Test commands**: Use read-only commands first to verify paths and permissions
- **Validate output**: Check command results before proceeding
- **Error handling**: Have fallback plans for common errors

### Documentation File Standards
- Always check if a subdirectory exists before creating documentation
- Follow the existing naming conventions in the workspace
- Use proper Markdown formatting with appropriate headers and structure
- Include relevant tags or metadata where applicable
- Validate frontmatter syntax for Docusaurus compatibility

### Automated Validation Workflow
When creating or modifying files, implement this validation sequence:

1. **Pre-creation validation**:
   ```
   - Check workspace structure with list_dir
   - Verify target directory exists
   - Search for existing similar files
   - Validate naming conventions
   ```

2. **During creation**:
   ```
   - Use create_file tool with proper absolute paths
   - Include appropriate frontmatter for Docusaurus
   - Follow established content structure
   - Implement proper Markdown syntax
   ```

3. **Post-creation verification**:
   ```
   - Read back the created file to verify content
   - Check for syntax errors or formatting issues
   - Validate file appears in correct directory
   - Confirm file follows project conventions
   ```

### Quality Assurance Checklist
For each file operation, verify:
- [ ] File path is absolute and correct
- [ ] Directory structure matches project organization
- [ ] Filename follows kebab-case convention
- [ ] Content includes proper frontmatter (if applicable)
- [ ] Markdown syntax is valid and well-formatted
- [ ] Links and references are functional
- [ ] Content fits the intended category/subdirectory
- [ ] No duplicate content or conflicting files

### Error Recovery Procedures
If file operations fail:
1. **Diagnose the issue**: Check error messages for path, permission, or syntax issues
2. **Verify prerequisites**: Ensure directories exist and paths are correct
3. **Retry with corrections**: Fix identified issues and attempt operation again
4. **Alternative approaches**: Use different tools or methods if primary approach fails
5. **Documentation**: Record successful approaches for future reference

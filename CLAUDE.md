# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DevOps Project Selector is a single-page web application that helps developers and operations professionals find their next DevOps learning project based on their current skills and background. The tool provides personalized project recommendations through two specialized learning tracks: Developer Track and Operations Track.

## Architecture

This is a self-contained static HTML application with no build system or external dependencies:

- **index.html**: Complete application with embedded CSS and JavaScript (839 lines)
- **README.md**: Comprehensive documentation explaining the tool's purpose and learning philosophy  
- **Hosted on GitHub Pages**: Live at https://darrelltang.github.io/devops-project-selector/

## Core Data Structure

The application centers around the `trackData` object containing:

### Two Learning Tracks
- **dev**: Developer Track - for people with coding backgrounds learning infrastructure
- **ops**: Operations Track - for people with infrastructure backgrounds learning development

### Progressive Skill Levels
Each track has 8-9 levels from beginner to bridge point:
- Beginner → Git → CI/CD/Infrastructure → Containers → Kubernetes → Bridge Level
- Bridge Level represents convergence where both tracks learn cross-training skills

### Project Recommendations  
Each level contains 2-3 specific projects with:
- `title`: Clear, actionable project name
- `description`: What you'll actually build/learn
- `why`: Explanation of learning value and importance
- `progression`: Visual indicator (🏗️ Build, 🔄 Upgrade, 🔀 Replace, ➕ Add, 🚀 Launch)

## User Interface Components

### Track Selection
- Two cards for Developer vs Operations background selection
- Visual styling changes based on selected track (green for dev, orange for ops)

### Level Selection  
- Dynamic list populated based on selected track
- Sequential numbering with special bridge level (🌉) 
- Purple gradient styling for bridge levels

### Project Display
- Project cards with consistent styling per track
- Progression hints explaining next steps
- Special handling for bridge level convergence messaging

## Development Workflow

Since this is a static site with no build process:
- All changes made directly to index.html
- Test by opening index.html in browser  
- No package managers, bundlers, or compilation required
- Deploy by pushing to GitHub (auto-published via GitHub Pages)

## Testing Approach

Manual testing workflow:
- Test both Developer and Operations track selections
- Verify all skill levels display correct projects
- Check progression hints and bridge level messaging
- Validate responsive design across screen sizes
- Ensure track-specific styling (colors, visual cues) works correctly

## Content Philosophy

The learning progression follows specific principles:
- **Atomic learning**: Specific actionable projects, not broad topics
- **Iterative progression**: Each project builds on previous skills with clear upgrade paths
- **Two-track approach**: Separate starting points for different backgrounds that eventually converge
- **Bridge convergence**: Both tracks meet for cross-training and advanced topics
- **Friction-free progression**: Natural next steps rather than overwhelming leaps
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DevOps Project Selector is a single-page web application that helps developers and operations professionals find their next DevOps learning project based on their current skills and background. The tool provides personalized project recommendations through two specialized learning tracks: Developer Track and Operations Track.

## Architecture

This is a Next.js application deployed on Vercel:

- **Next.js framework**: React-based with TypeScript support
- **Component-based architecture**: Modular UI components in src/components/
- **App Router**: Using Next.js 13+ app directory structure
- **Analytics**: Vercel Analytics and Speed Insights integrated
- **Deployed on Vercel**: Live deployment with automatic builds from git

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

Standard Next.js development workflow:
- Run `npm run dev` for local development server
- Components are in src/components/, pages in src/app/
- TypeScript compilation and type checking
- Deploy by pushing to git (auto-deployed via Vercel)
- Analytics data available in Vercel dashboard

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
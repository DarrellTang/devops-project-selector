import { TrackData } from '@/types';

export const trackData: TrackData = {
  dev: {
    title: "💻 Developer Track - Where are you right now?",
    levels: [
      {
        id: 'beginner',
        title: "I'm new to DevOps",
        description: "I code but haven't done much with deployment/infrastructure"
      },
      {
        id: 'git',
        title: "I know Git well",
        description: "Comfortable with branching, pull requests, GitHub/GitLab"
      },
      {
        id: 'cicd',
        title: "I have CI/CD for building and testing",
        description: "GitHub Actions or similar builds and tests my code automatically"
      },
      {
        id: 'vms',
        title: "I can provision and deploy to VMs",
        description: "I've created cloud VMs and deployed my app to them"
      },
      {
        id: 'containers',
        title: "I use containers locally",
        description: "I've containerized my app and run it with Docker"
      },
      {
        id: 'deploy',
        title: "I deploy containers to cloud services",
        description: "My containers run on Cloud Run, ECS, etc."
      },
      {
        id: 'k8s-local',
        title: "I use local Kubernetes",
        description: "I've deployed apps to kind, Docker Desktop K8s, or similar"
      },
      {
        id: 'k8s-cloud',
        title: "I use managed Kubernetes",
        description: "I deploy to EKS, GKE, AKS or similar managed clusters"
      },
      {
        id: 'bridge',
        title: "🌉 Bridge Level: Learn Operations",
        description: "Ready to learn infrastructure, scaling, and production operations",
        isBridge: true
      }
    ],
    projects: {
      beginner: [
        {
          title: 'Master Git workflows for your projects',
          description: 'Learn branching, pull requests, and collaboration. Foundation for everything else.',
          why: 'Why this matters: All DevOps tools integrate with Git. This is your starting point.',
          track: 'dev',
          progression: '🏗️ **Build:** Your first DevOps foundation'
        },
        {
          title: 'Set up basic CI/CD for building and testing',
          description: 'Use GitHub Actions to automatically build and test your code when you push.',
          why: 'Why this matters: Automation catches bugs early and saves time.',
          track: 'dev',
          progression: '🏗️ **Build:** Automated build and test pipeline'
        }
      ],
      git: [
        {
          title: 'Learn to provision cloud VMs',
          description: 'Create your first AWS EC2, Azure VM, or DigitalOcean droplet using the cloud console.',
          why: 'Why this matters: Understanding basic cloud infrastructure is essential.',
          track: 'dev',
          progression: '🏗️ **Build:** Your first cloud infrastructure'
        },
        {
          title: 'Deploy your app to the VM manually',
          description: 'SSH into your VM, install dependencies, and get your app running.',
          why: 'Why this matters: Learn what happens "under the hood" of deployments.',
          track: 'dev',
          progression: '🚀 **Launch:** Your first server deployment'
        }
      ],
      cicd: [
        {
          title: 'Automate VM provisioning with basic scripts',
          description: 'Use cloud CLI tools to create VMs programmatically instead of clicking.',
          why: 'Why this matters: Manual clicking doesn\'t scale and creates inconsistency.',
          track: 'dev',
          progression: '🔀 **Replace:** Manual VM creation with automation'
        },
        {
          title: 'Add deployment automation to your CI/CD',
          description: 'Extend GitHub Actions to automatically deploy to your VM when code changes.',
          why: 'Why this matters: Complete the automation from code to running application.',
          track: 'dev',
          progression: '🔄 **Upgrade:** CI/CD from build-only to full deployment'
        }
      ],
      vms: [
        {
          title: 'Learn Docker and containerize your app',
          description: 'Create a Dockerfile and run your app in containers locally.',
          why: 'Why this matters: Containers solve "works on my machine" and simplify deployment.',
          track: 'dev',
          progression: '🏗️ **Build:** Containerized version of your app'
        },
        {
          title: 'Replace VM deployment with container deployment',
          description: 'Deploy containers to your VM instead of installing dependencies directly.',
          why: 'Why this matters: Consistent environments and easier scaling.',
          track: 'dev',
          progression: '🔀 **Replace:** Direct VM deployment with containerized deployment'
        }
      ],
      containers: [
        {
          title: 'Deploy containers to managed cloud services',
          description: 'Use Cloud Run, ECS, or Azure Container Instances instead of managing VMs.',
          why: 'Why this matters: Managed services handle infrastructure complexity for you.',
          track: 'dev',
          progression: '🔄 **Upgrade:** Self-managed VMs to managed container services'
        },
        {
          title: 'Upgrade CI/CD to build and push container images',
          description: 'Automate building Docker images and pushing to container registries.',
          why: 'Why this matters: Complete automation from code to deployable container.',
          track: 'dev',
          progression: '🔄 **Upgrade:** CI/CD to build containers, not just test code'
        }
      ],
      deploy: [
        {
          title: 'Learn Kubernetes locally with kind or Docker Desktop',
          description: 'Set up local K8s and deploy your containerized app to understand orchestration.',
          why: 'Why this matters: Learn K8s fundamentals in a safe local environment.',
          track: 'dev',
          progression: '🏗️ **Build:** Local Kubernetes development environment'
        },
        {
          title: 'Master basic Kubernetes concepts',
          description: 'Work with pods, services, deployments, and ingress controllers locally.',
          why: 'Why this matters: Core K8s concepts you\'ll need for production.',
          track: 'dev',
          progression: '🏗️ **Build:** Kubernetes application deployment skills'
        }
      ],
      'k8s-local': [
        {
          title: 'Deploy to managed Kubernetes cluster',
          description: 'Move from local K8s to EKS, GKE, or AKS for production deployment.',
          why: 'Why this matters: Production K8s has different networking, security, and scaling.',
          track: 'dev',
          progression: '🔄 **Upgrade:** Local K8s to production managed cluster'
        },
        {
          title: 'Learn Kubernetes networking and storage',
          description: 'Configure ingress controllers, persistent volumes, and network policies.',
          why: 'Why this matters: Production apps need persistent data and proper networking.',
          track: 'dev',
          progression: '➕ **Add:** Production-grade K8s configuration'
        }
      ],
      'k8s-cloud': [
        {
          title: 'Implement GitOps for K8s deployments',
          description: 'Use ArgoCD or Flux to deploy via Git instead of manual kubectl commands.',
          why: 'Why this matters: GitOps is the modern way to manage K8s deployments safely.',
          track: 'dev',
          progression: '🔀 **Replace:** Manual kubectl with GitOps automation'
        },
        {
          title: 'Add monitoring and observability to K8s',
          description: 'Set up Prometheus, Grafana, and centralized logging for your cluster.',
          why: 'Why this matters: Production K8s needs comprehensive monitoring.',
          track: 'dev',
          progression: '➕ **Add:** Production-grade monitoring and observability'
        }
      ],
      bridge: [
        {
          title: 'Upgrade to advanced Kubernetes patterns',
          description: 'Learn Helm, operators, custom resources, and advanced K8s deployment strategies.',
          why: 'Why this matters: Advanced K8s patterns enable complex application architectures.',
          track: 'bridge',
          progression: '🔄 **Upgrade:** Basic K8s to advanced orchestration patterns'
        },
        {
          title: 'Build platform engineering capabilities',
          description: 'Create self-service platforms, developer portals, and internal tooling.',
          why: 'Why this matters: Platform engineering scales DevOps practices across teams.',
          track: 'bridge',
          progression: '🏗️ **Build:** Platform engineering and team scaling'
        },
        {
          title: 'Master production operations and SRE practices',
          description: 'Implement SLOs, error budgets, incident response, and reliability engineering.',
          why: 'Why this matters: Production systems require systematic reliability practices.',
          track: 'bridge',
          progression: '🏗️ **Build:** Site Reliability Engineering expertise'
        }
      ]
    }
  },
  ops: {
    title: "⚙️ Operations Track - Where are you right now?",
    levels: [
      {
        id: 'beginner',
        title: "I'm new to DevOps",
        description: "I manage servers but haven't used much automation"
      },
      {
        id: 'git',
        title: "I know Git basics",
        description: "Can commit, push, pull, understand repositories"
      },
      {
        id: 'infrastructure',
        title: "I provision infrastructure with code",
        description: "I use Terraform, CloudFormation, or similar tools"
      },
      {
        id: 'iac',
        title: "I have automated infrastructure deployment",
        description: "My infrastructure deploys via CI/CD pipelines"
      },
      {
        id: 'containers',
        title: "I deploy applications with containers",
        description: "I understand Docker and container deployment workflows"
      },
      {
        id: 'k8s-local',
        title: "I use local Kubernetes",
        description: "I've worked with kind, Docker Desktop K8s, or local clusters"
      },
      {
        id: 'k8s-cloud',
        title: "I manage production Kubernetes",
        description: "I operate EKS, GKE, AKS or similar managed clusters"
      },
      {
        id: 'bridge',
        title: "🌉 Bridge Level: Learn Development",
        description: "Ready to build applications and understand development workflows",
        isBridge: true
      }
    ],
    projects: {
      beginner: [
        {
          title: 'Learn Git for infrastructure management',
          description: 'Version control your scripts, configs, and automation code.',
          why: 'Why this matters: Track changes to your infrastructure and collaborate safely.',
          track: 'ops',
          progression: '🏗️ **Build:** Foundation for infrastructure automation'
        },
        {
          title: 'Provision your first cloud VM through the console',
          description: 'Learn cloud basics by creating VMs in AWS, Azure, or GCP using the web interface.',
          why: 'Why this matters: Understand cloud concepts before automating them.',
          track: 'ops',
          progression: '🏗️ **Build:** Cloud infrastructure fundamentals'
        }
      ],
      git: [
        {
          title: 'Automate VM creation with CLI tools and scripts',
          description: 'Replace console clicking with cloud CLI commands and basic automation scripts.',
          why: 'Why this matters: Manual clicking doesn\'t scale and creates inconsistency.',
          track: 'ops',
          progression: '🔀 **Replace:** Manual console work with CLI automation'
        },
        {
          title: 'Learn Infrastructure as Code with Terraform',
          description: 'Replace your scripts with proper IaC using Terraform or similar tools.',
          why: 'Why this matters: IaC is declarative, testable, and version controlled.',
          track: 'ops',
          progression: '🔀 **Replace:** Scripts with Infrastructure as Code'
        }
      ],
      infrastructure: [
        {
          title: 'Deploy a sample application to learn app workflows',
          description: 'Use a simple Node.js or Python app to understand deployment patterns.',
          why: 'Why this matters: Understanding applications helps you support developers better.',
          track: 'ops',
          progression: '🏗️ **Build:** Your first application deployment'
        },
        {
          title: 'Build reusable Terraform modules',
          description: 'Refactor your Terraform code into reusable modules for different environments.',
          why: 'Why this matters: DRY principles and consistent infrastructure patterns.',
          track: 'ops',
          progression: '🔄 **Upgrade:** Basic Terraform to modular, reusable code'
        }
      ],
      iac: [
        {
          title: 'Add CI/CD for infrastructure deployments',
          description: 'Automate Terraform deployments with GitHub Actions instead of manual runs.',
          why: 'Why this matters: Infrastructure changes should be tested and automated.',
          track: 'ops',
          progression: '➕ **Add:** Automation to infrastructure deployments'
        },
        {
          title: 'Learn Docker and containerize applications',
          description: 'Understand how developers package apps and deploy containers.',
          why: 'Why this matters: Containers are the modern application deployment standard.',
          track: 'ops',
          progression: '🏗️ **Build:** Container deployment expertise'
        }
      ],
      containers: [
        {
          title: 'Build container infrastructure with Terraform',
          description: 'Provision container registries, ECS clusters, or container-ready infrastructure.',
          why: 'Why this matters: Infrastructure should support modern application patterns.',
          track: 'ops',
          progression: '🔄 **Upgrade:** VM-focused infrastructure to container-ready platform'
        },
        {
          title: 'Learn Kubernetes locally with kind or Docker Desktop',
          description: 'Set up local K8s cluster and deploy sample applications.',
          why: 'Why this matters: Learn K8s fundamentals before managing production clusters.',
          track: 'ops',
          progression: '🏗️ **Build:** Kubernetes administration skills'
        }
      ],
      'k8s-local': [
        {
          title: 'Master Kubernetes networking and storage',
          description: 'Configure services, ingress, persistent volumes, and network policies.',
          why: 'Why this matters: Production K8s requires understanding these core concepts.',
          track: 'ops',
          progression: '🏗️ **Build:** Production-ready K8s knowledge'
        },
        {
          title: 'Deploy and manage production Kubernetes cluster',
          description: 'Set up EKS, GKE, or AKS with proper networking, security, and monitoring.',
          why: 'Why this matters: Production K8s has different requirements than local development.',
          track: 'ops',
          progression: '🔄 **Upgrade:** Local K8s skills to production cluster management'
        }
      ],
      'k8s-cloud': [
        {
          title: 'Implement Kubernetes security and compliance',
          description: 'Configure RBAC, network policies, pod security standards, and compliance scanning.',
          why: 'Why this matters: Production K8s requires comprehensive security controls.',
          track: 'ops',
          progression: '➕ **Add:** Security and compliance to K8s operations'
        },
        {
          title: 'Implement GitOps for K8s application lifecycle',
          description: 'Set up ArgoCD or Flux for declarative application deployment and management.',
          why: 'Why this matters: GitOps provides safe, auditable, and scalable K8s operations.',
          track: 'ops',
          progression: '🔀 **Replace:** Manual K8s operations with GitOps automation'
        }
      ],
      bridge: [
        {
          title: 'Build your first web application from scratch',
          description: 'Create a REST API or web app in Node.js, Python, or Go to understand development workflows.',
          why: 'Why this matters: Understanding how apps are built makes you better at deploying them.',
          track: 'bridge',
          progression: '🏗️ **Build:** Your first application as an ops person'
        },
        {
          title: 'Add developer tooling to your workflow',
          description: 'Learn package managers, testing, linting, and developer tools for your new app.',
          why: 'Why this matters: Bridge the gap between infrastructure and application development.',
          track: 'bridge',
          progression: '➕ **Add:** Development practices to your skillset'
        },
        {
          title: 'Learn application debugging and performance',
          description: 'Understand how developers debug apps, profile performance, and optimize code.',
          why: 'Why this matters: Help developers solve problems instead of just managing infrastructure.',
          track: 'bridge',
          progression: '🏗️ **Build:** Developer mindset and troubleshooting skills'
        }
      ]
    }
  }
};
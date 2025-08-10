import { TrackData } from '@/types';

export const trackData: TrackData = {
  dev: {
    title: "💻 Developer Track",
    levels: [
      {
        id: 'beginner',
        title: "I'm new to DevOps",
        description: "I code but new to deployment"
      },
      {
        id: 'git',
        title: "I know Git well",
        description: "I use Git branching & PRs"
      },
      {
        id: 'cicd',
        title: "I have CI/CD for building and testing",
        description: "GitHub Actions builds my code"
      },
      {
        id: 'vms',
        title: "I can provision and deploy to VMs",
        description: "I deploy apps to cloud VMs"
      },
      {
        id: 'containers',
        title: "I use containers locally",
        description: "Docker run, build, compose"
      },
      {
        id: 'deploy',
        title: "I deploy containers to cloud services",
        description: "Cloud Run, ECS, etc."
      },
      {
        id: 'k8s-local',
        title: "I use local Kubernetes",
        description: "kind, Docker Desktop K8s"
      },
      {
        id: 'k8s-cloud',
        title: "I use managed Kubernetes",
        description: "EKS, GKE, AKS clusters"
      },
      {
        id: 'bridge',
        title: "🌉 Bridge Level: Learn Operations",
        description: "Ready to learn infrastructure & ops",
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
          progression: '🏗️ **Build:** Your first DevOps foundation',
          resources: [
            {
              title: 'Git Official Documentation',
              url: 'https://git-scm.com/doc',
              type: 'official'
            },
            {
              title: 'GitHub Flow Guide',
              url: 'https://docs.github.com/en/get-started/quickstart/github-flow',
              type: 'official'
            },
            {
              title: 'Atlassian Git Branching Tutorial',
              url: 'https://www.atlassian.com/git/tutorials/using-branches',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Git installed on your machine',
            'GitHub account created',
            'Basic command line familiarity',
            'An existing code project or willingness to create one'
          ],
          successCriteria: [
            'Can create and switch between feature branches',
            'Successfully merge branches via pull requests',
            'Understand git add, commit, push, pull workflow',
            'Can resolve basic merge conflicts',
            'Comfortable with GitHub PR process'
          ],
          difficulty: 'beginner'
        },
        {
          title: 'Set up basic CI/CD for building and testing',
          description: 'Use GitHub Actions to automatically build and test your code when you push.',
          why: 'Why this matters: Automation catches bugs early and saves time.',
          track: 'dev',
          progression: '🏗️ **Build:** Automated build and test pipeline',
          resources: [
            {
              title: 'GitHub Actions Documentation',
              url: 'https://docs.github.com/en/actions',
              type: 'official'
            },
            {
              title: 'GitHub Actions Quickstart',
              url: 'https://docs.github.com/en/actions/quickstart',
              type: 'tutorial'
            },
            {
              title: 'GitHub Actions Workflow Syntax',
              url: 'https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions',
              type: 'reference'
            }
          ],
          prerequisites: [
            'Git repository on GitHub',
            'Project with tests (or willingness to add basic tests)',
            'Understanding of your project\'s build process',
            'Basic YAML knowledge (or willingness to learn)'
          ],
          successCriteria: [
            'GitHub Actions workflow triggers on every push',
            'Build process runs automatically and successfully',
            'Tests execute and pass in the pipeline',
            'Can see build status and history in GitHub',
            'Failed builds prevent merging via branch protection'
          ],
          difficulty: 'beginner'
        }
      ],
      git: [
        {
          title: 'Learn to provision cloud VMs',
          description: 'Create your first AWS EC2, Azure VM, or DigitalOcean droplet using the cloud console.',
          why: 'Why this matters: Understanding basic cloud infrastructure is essential.',
          track: 'dev',
          progression: '🏗️ **Build:** Your first cloud infrastructure',
          resources: [
            {
              title: 'AWS EC2 User Guide',
              url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html',
              type: 'official'
            },
            {
              title: 'DigitalOcean Droplet Quickstart',
              url: 'https://docs.digitalocean.com/products/droplets/quickstart/',
              type: 'official'
            },
            {
              title: 'Azure VM Tutorial',
              url: 'https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal',
              type: 'official'
            }
          ],
          prerequisites: [
            'Cloud account (AWS, Azure, GCP, or DigitalOcean)',
            'Payment method configured',
            'SSH key pair generated',
            'Basic networking concepts'
          ],
          successCriteria: [
            'Successfully launch a VM in the cloud',
            'Connect to VM via SSH',
            'Understand VM sizing and pricing',
            'Can start, stop, and terminate instances',
            'Configure basic security groups/firewall rules'
          ],
          difficulty: 'beginner'
        },
        {
          title: 'Deploy your app to the VM manually',
          description: 'SSH into your VM, install dependencies, and get your app running.',
          why: 'Why this matters: Learn what happens "under the hood" of deployments.',
          track: 'dev',
          progression: '🚀 **Launch:** Your first server deployment',
          resources: [
            {
              title: 'SSH Essentials',
              url: 'https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys',
              type: 'tutorial'
            },
            {
              title: 'Linux Server Setup',
              url: 'https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04',
              type: 'tutorial'
            },
            {
              title: 'Systemd Service Management',
              url: 'https://www.digitalocean.com/community/tutorials/systemd-essentials-working-with-services-units-and-the-journal',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Running cloud VM with SSH access',
            'Application code ready to deploy',
            'Understanding of your app\'s dependencies',
            'Basic Linux command line knowledge'
          ],
          successCriteria: [
            'App successfully running on the VM',
            'Can access app via public IP/domain',
            'App starts automatically on system boot',
            'Basic logging and monitoring in place',
            'Can troubleshoot common deployment issues'
          ],
          difficulty: 'beginner'
        }
      ],
      cicd: [
        {
          title: 'Automate VM provisioning with basic scripts',
          description: 'Use cloud CLI tools to create VMs programmatically instead of clicking.',
          why: 'Why this matters: Manual clicking doesn\'t scale and creates inconsistency.',
          track: 'dev',
          progression: '🔀 **Replace:** Manual VM creation with automation',
          resources: [
            {
              title: 'AWS CLI User Guide',
              url: 'https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html',
              type: 'official'
            },
            {
              title: 'Azure CLI Overview',
              url: 'https://docs.microsoft.com/en-us/cli/azure/',
              type: 'official'
            },
            {
              title: 'Bash Scripting Guide',
              url: 'https://tldp.org/LDP/Bash-Beginners-Guide/html/',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Cloud CLI installed and configured',
            'Experience with manual VM provisioning',
            'Basic shell scripting knowledge',
            'Understanding of cloud resource concepts'
          ],
          successCriteria: [
            'Script successfully creates VMs programmatically',
            'Can provision multiple environments consistently',
            'Script includes proper error handling',
            'Documentation for script usage and parameters',
            'Version control scripts with meaningful commits'
          ],
          difficulty: 'intermediate'
        },
        {
          title: 'Add deployment automation to your CI/CD',
          description: 'Extend GitHub Actions to automatically deploy to your VM when code changes.',
          why: 'Why this matters: Complete the automation from code to running application.',
          track: 'dev',
          progression: '🔄 **Upgrade:** CI/CD from build-only to full deployment',
          resources: [
            {
              title: 'GitHub Actions Deployment',
              url: 'https://docs.github.com/en/actions/deployment/about-deployments',
              type: 'official'
            },
            {
              title: 'SSH Deploy Action',
              url: 'https://github.com/marketplace/actions/ssh-deploy',
              type: 'example'
            },
            {
              title: 'GitHub Secrets Management',
              url: 'https://docs.github.com/en/actions/security-guides/encrypted-secrets',
              type: 'official'
            }
          ],
          prerequisites: [
            'Working GitHub Actions build pipeline',
            'Deployed application on VM',
            'SSH access to deployment target',
            'Understanding of deployment process'
          ],
          successCriteria: [
            'Code changes trigger automated deployment',
            'Successful deployments update running application',
            'Failed deployments don\'t break production',
            'Deployment status visible in GitHub',
            'Can rollback deployments when needed'
          ],
          difficulty: 'intermediate'
        }
      ],
      vms: [
        {
          title: 'Learn Docker and containerize your app',
          description: 'Create a Dockerfile and run your app in containers locally.',
          why: 'Why this matters: Containers solve "works on my machine" and simplify deployment.',
          track: 'dev',
          progression: '🏗️ **Build:** Containerized version of your app',
          resources: [
            {
              title: 'Docker Get Started Guide',
              url: 'https://docs.docker.com/get-started/',
              type: 'official'
            },
            {
              title: 'Dockerfile Best Practices',
              url: 'https://docs.docker.com/develop/dev-best-practices/',
              type: 'official'
            },
            {
              title: 'Docker Compose Overview',
              url: 'https://docs.docker.com/compose/',
              type: 'official'
            },
            {
              title: 'Multi-stage Build Tutorial',
              url: 'https://docs.docker.com/build/building/multi-stage/',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Docker Desktop installed and running',
            'Working application (web app, API, or service)',
            'Understanding of your app\'s dependencies and runtime',
            'Basic command line skills',
            'Text editor for creating Dockerfile'
          ],
          successCriteria: [
            'Successfully build Docker image of your application',
            'Container runs and serves your app identically to local dev',
            'Can access your containerized app via browser/API',
            'Understand Docker concepts: images, containers, layers',
            'Created efficient Dockerfile with proper base image',
            'App data persists or is properly managed'
          ],
          difficulty: 'intermediate'
        },
        {
          title: 'Replace VM deployment with container deployment',
          description: 'Deploy containers to your VM instead of installing dependencies directly.',
          why: 'Why this matters: Consistent environments and easier scaling.',
          track: 'dev',
          progression: '🔀 **Replace:** Direct VM deployment with containerized deployment',
          resources: [
            {
              title: 'Docker Compose Production Guide',
              url: 'https://docs.docker.com/compose/production/',
              type: 'official'
            },
            {
              title: 'Container Security Best Practices',
              url: 'https://docs.docker.com/engine/security/',
              type: 'official'
            },
            {
              title: 'Docker Logging and Monitoring',
              url: 'https://docs.docker.com/config/containers/logging/',
              type: 'official'
            }
          ],
          prerequisites: [
            'Working containerized application',
            'VM with Docker installed',
            'Understanding of Docker basics',
            'Existing deployment process to replace'
          ],
          successCriteria: [
            'Application runs via containers on VM',
            'Container deployment is reliable and repeatable',
            'Proper logging and monitoring in place',
            'Can update application via container image updates',
            'Container orchestration handles restarts and failures'
          ],
          difficulty: 'intermediate'
        }
      ],
      containers: [
        {
          title: 'Deploy containers to managed cloud services',
          description: 'Use Cloud Run, ECS, or Azure Container Instances instead of managing VMs.',
          why: 'Why this matters: Managed services handle infrastructure complexity for you.',
          track: 'dev',
          progression: '🔄 **Upgrade:** Self-managed VMs to managed container services',
          resources: [
            {
              title: 'Google Cloud Run Documentation',
              url: 'https://cloud.google.com/run/docs',
              type: 'official'
            },
            {
              title: 'AWS ECS Getting Started',
              url: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started.html',
              type: 'official'
            },
            {
              title: 'Azure Container Instances',
              url: 'https://docs.microsoft.com/en-us/azure/container-instances/',
              type: 'official'
            }
          ],
          prerequisites: [
            'Working container image in registry',
            'Cloud account with container services enabled',
            'Understanding of containerization concepts',
            'Basic knowledge of cloud networking'
          ],
          successCriteria: [
            'Application successfully deployed to managed container service',
            'Service scales automatically based on traffic',
            'Can deploy updates via new container images',
            'Monitoring and logging integrated with cloud platform',
            'Understand cost implications and optimization'
          ],
          difficulty: 'intermediate'
        },
        {
          title: 'Upgrade CI/CD to build and push container images',
          description: 'Automate building Docker images and pushing to container registries.',
          why: 'Why this matters: Complete automation from code to deployable container.',
          track: 'dev',
          progression: '🔄 **Upgrade:** CI/CD to build containers, not just test code',
          resources: [
            {
              title: 'GitHub Actions Docker Build',
              url: 'https://docs.github.com/en/actions/publishing-packages/publishing-docker-images',
              type: 'official'
            },
            {
              title: 'Docker Hub Registry',
              url: 'https://docs.docker.com/docker-hub/',
              type: 'official'
            },
            {
              title: 'Container Registry Security',
              url: 'https://docs.docker.com/engine/security/trust/',
              type: 'official'
            }
          ],
          prerequisites: [
            'Working Dockerfile and containerized app',
            'Container registry account (Docker Hub, ECR, etc.)',
            'Existing CI/CD pipeline',
            'Understanding of image tagging strategies'
          ],
          successCriteria: [
            'CI/CD automatically builds container images on code changes',
            'Images pushed to registry with proper tags',
            'Security scanning integrated into build process',
            'Failed builds prevent bad images from being deployed',
            'Image versioning strategy implemented'
          ],
          difficulty: 'intermediate'
        }
      ],
      deploy: [
        {
          title: 'Learn Kubernetes locally with kind or Docker Desktop',
          description: 'Set up local K8s and deploy your containerized app to understand orchestration.',
          why: 'Why this matters: Learn K8s fundamentals in a safe local environment.',
          track: 'dev',
          progression: '🏗️ **Build:** Local Kubernetes development environment',
          resources: [
            {
              title: 'Kubernetes Official Tutorial',
              url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
              type: 'official'
            },
            {
              title: 'kind (Kubernetes in Docker) Quick Start',
              url: 'https://kind.sigs.k8s.io/docs/user/quick-start/',
              type: 'official'
            },
            {
              title: 'kubectl Cheat Sheet',
              url: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/',
              type: 'reference'
            },
            {
              title: 'Docker Desktop Kubernetes',
              url: 'https://docs.docker.com/desktop/kubernetes/',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Docker knowledge and containerized application',
            'Docker Desktop with Kubernetes enabled OR kind installed',
            'kubectl installed and configured',
            'Basic YAML understanding',
            'Working container image of your app'
          ],
          successCriteria: [
            'Local Kubernetes cluster running (kind or Docker Desktop)',
            'Successfully deploy your app using kubectl',
            'App accessible through Kubernetes service',
            'Understand pods, deployments, and services concepts',
            'Can view logs and troubleshoot pod issues',
            'Successfully scale deployment up and down'
          ],
          difficulty: 'intermediate'
        },
        {
          title: 'Master basic Kubernetes concepts',
          description: 'Work with pods, services, deployments, and ingress controllers locally.',
          why: 'Why this matters: Core K8s concepts you\'ll need for production.',
          track: 'dev',
          progression: '🏗️ **Build:** Kubernetes application deployment skills',
          resources: [
            {
              title: 'Kubernetes Services Documentation',
              url: 'https://kubernetes.io/docs/concepts/services-networking/service/',
              type: 'official'
            },
            {
              title: 'Ingress Controllers Guide',
              url: 'https://kubernetes.io/docs/concepts/services-networking/ingress/',
              type: 'official'
            },
            {
              title: 'Kubernetes Networking Concepts',
              url: 'https://kubernetes.io/docs/concepts/services-networking/',
              type: 'official'
            },
            {
              title: 'NGINX Ingress Controller',
              url: 'https://kubernetes.github.io/ingress-nginx/deploy/#quick-start',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Local Kubernetes cluster running (kind or Docker Desktop)',
            'Successfully deployed an app with kubectl',
            'Basic understanding of networking concepts',
            'kubectl command line experience',
            'YAML configuration skills'
          ],
          successCriteria: [
            'Create and manage different service types (ClusterIP, NodePort, LoadBalancer)',
            'Deploy and configure an ingress controller',
            'Route traffic to multiple applications via ingress',
            'Understand pod-to-pod communication within cluster',
            'Debug connectivity issues using kubectl',
            'Implement health checks and readiness probes'
          ],
          difficulty: 'intermediate'
        }
      ],
      'k8s-local': [
        {
          title: 'Deploy to managed Kubernetes cluster',
          description: 'Move from local K8s to EKS, GKE, or AKS for production deployment.',
          why: 'Why this matters: Production K8s has different networking, security, and scaling.',
          track: 'dev',
          progression: '🔄 **Upgrade:** Local K8s to production managed cluster',
          resources: [
            {
              title: 'Amazon EKS Getting Started',
              url: 'https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html',
              type: 'official'
            },
            {
              title: 'Google GKE Quickstart',
              url: 'https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster',
              type: 'official'
            },
            {
              title: 'Azure AKS Tutorial',
              url: 'https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-prepare-app',
              type: 'official'
            },
            {
              title: 'kubectl Context Management',
              url: 'https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Local Kubernetes experience with kind/Docker Desktop',
            'Cloud account (AWS, GCP, or Azure) with appropriate permissions',
            'Cloud CLI installed and configured (aws, gcloud, or az)',
            'Understanding of basic K8s resources (pods, services, deployments)',
            'Container image in a registry (Docker Hub, ECR, etc.)'
          ],
          successCriteria: [
            'Successfully provision managed Kubernetes cluster',
            'Deploy applications from local setup to cloud cluster',
            'Configure kubectl to manage multiple cluster contexts',
            'Understand differences between local and managed K8s',
            'Application accessible via public load balancer',
            'Can scale cluster nodes and application replicas'
          ],
          difficulty: 'intermediate'
        },
        {
          title: 'Learn Kubernetes networking and storage',
          description: 'Configure ingress controllers, persistent volumes, and network policies.',
          why: 'Why this matters: Production apps need persistent data and proper networking.',
          track: 'dev',
          progression: '➕ **Add:** Production-grade K8s configuration',
          resources: [
            {
              title: 'Kubernetes Persistent Volumes',
              url: 'https://kubernetes.io/docs/concepts/storage/persistent-volumes/',
              type: 'official'
            },
            {
              title: 'Network Policies Guide',
              url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/',
              type: 'official'
            },
            {
              title: 'Cloud Provider Storage Classes',
              url: 'https://kubernetes.io/docs/concepts/storage/storage-classes/',
              type: 'official'
            },
            {
              title: 'Ingress Controllers Comparison',
              url: 'https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/',
              type: 'reference'
            }
          ],
          prerequisites: [
            'Production Kubernetes cluster running',
            'Applications deployed to managed cluster',
            'Understanding of K8s services and basic networking',
            'Cloud provider storage concepts',
            'kubectl administration skills'
          ],
          successCriteria: [
            'Configure persistent storage for stateful applications',
            'Implement network policies for application isolation',
            'Set up ingress controller with SSL/TLS termination',
            'Manage storage classes and dynamic provisioning',
            'Debug networking issues between pods and services',
            'Implement backup and recovery for persistent data'
          ],
          difficulty: 'intermediate'
        }
      ],
      'k8s-cloud': [
        {
          title: 'Implement GitOps for K8s deployments',
          description: 'Use ArgoCD or Flux to deploy via Git instead of manual kubectl commands.',
          why: 'Why this matters: GitOps is the modern way to manage K8s deployments safely.',
          track: 'dev',
          progression: '🔀 **Replace:** Manual kubectl with GitOps automation',
          resources: [
            {
              title: 'ArgoCD Getting Started',
              url: 'https://argo-cd.readthedocs.io/en/stable/getting_started/',
              type: 'official'
            },
            {
              title: 'Flux Documentation',
              url: 'https://fluxcd.io/flux/get-started/',
              type: 'official'
            },
            {
              title: 'GitOps Principles',
              url: 'https://opengitops.dev/',
              type: 'reference'
            },
            {
              title: 'GitOps Tutorial with ArgoCD',
              url: 'https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Production Kubernetes cluster (managed or self-hosted)',
            'Containerized applications with K8s manifests',
            'Git repository with K8s deployment configurations',
            'Understanding of K8s concepts (deployments, services, ingress)',
            'kubectl access and cluster admin permissions'
          ],
          successCriteria: [
            'ArgoCD or Flux deployed and configured in your cluster',
            'Applications deploy automatically when Git changes',
            'Can rollback deployments via Git revert',
            'Multi-environment GitOps workflow (dev, staging, prod)',
            'Understand GitOps principles: declarative, versioned, immutable',
            'Monitoring and alerting on deployment status'
          ],
          difficulty: 'advanced'
        },
        {
          title: 'Add monitoring and observability to K8s',
          description: 'Set up Prometheus, Grafana, and centralized logging for your cluster.',
          why: 'Why this matters: Production K8s needs comprehensive monitoring.',
          track: 'dev',
          progression: '➕ **Add:** Production-grade monitoring and observability',
          resources: [
            {
              title: 'Prometheus Operator',
              url: 'https://prometheus-operator.dev/docs/prologue/introduction/',
              type: 'official'
            },
            {
              title: 'Grafana Kubernetes Monitoring',
              url: 'https://grafana.com/docs/grafana/latest/features/datasources/prometheus/',
              type: 'official'
            },
            {
              title: 'Kubernetes Metrics Server',
              url: 'https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-metrics-pipeline/',
              type: 'official'
            },
            {
              title: 'ELK Stack on Kubernetes',
              url: 'https://www.elastic.co/guide/en/cloud-on-k8s/current/k8s-overview.html',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Production Kubernetes cluster with applications running',
            'Understanding of metrics, logs, and traces concepts',
            'Helm package manager installed',
            'Basic YAML and configuration management skills',
            'kubectl cluster administration access'
          ],
          successCriteria: [
            'Prometheus collecting metrics from cluster and applications',
            'Grafana dashboards showing cluster and application health',
            'Centralized logging solution collecting pod logs',
            'Alerting rules configured for critical issues',
            'Application performance metrics and SLIs tracked',
            'Can troubleshoot issues using metrics and logs'
          ],
          difficulty: 'advanced'
        }
      ],
      bridge: [
        {
          title: 'Upgrade to advanced Kubernetes patterns',
          description: 'Learn Helm, operators, custom resources, and advanced K8s deployment strategies.',
          why: 'Why this matters: Advanced K8s patterns enable complex application architectures.',
          track: 'bridge',
          progression: '🔄 **Upgrade:** Basic K8s to advanced orchestration patterns',
          resources: [
            {
              title: 'Helm Official Documentation',
              url: 'https://helm.sh/docs/',
              type: 'official'
            },
            {
              title: 'Kubernetes Operators Explained',
              url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/operator/',
              type: 'official'
            },
            {
              title: 'Custom Resource Definitions (CRDs)',
              url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/',
              type: 'official'
            },
            {
              title: 'Operator SDK Tutorial',
              url: 'https://sdk.operatorframework.io/docs/building-operators/',
              type: 'tutorial'
            },
            {
              title: 'Kustomize Documentation',
              url: 'https://kustomize.io/',
              type: 'reference'
            }
          ],
          prerequisites: [
            'Production Kubernetes experience with deployments and services',
            'Strong understanding of YAML and Kubernetes manifests',
            'Experience with kubectl and cluster administration',
            'Basic Go programming knowledge (for operators)',
            'Familiarity with CI/CD and GitOps workflows'
          ],
          successCriteria: [
            'Deploy applications using Helm charts with custom values',
            'Create and deploy a custom Kubernetes operator',
            'Define and use Custom Resource Definitions (CRDs)',
            'Implement advanced deployment strategies (blue-green, canary)',
            'Use Kustomize for environment-specific configurations',
            'Understand when to use each pattern and their trade-offs'
          ],
          difficulty: 'advanced'
        },
        {
          title: 'Build platform engineering capabilities',
          description: 'Create self-service platforms, developer portals, and internal tooling.',
          why: 'Why this matters: Platform engineering scales DevOps practices across teams.',
          track: 'bridge',
          progression: '🏗️ **Build:** Platform engineering and team scaling',
          resources: [
            {
              title: 'Platform Engineering Guide',
              url: 'https://platformengineering.org/blog/what-is-platform-engineering',
              type: 'reference'
            },
            {
              title: 'Backstage Developer Portal',
              url: 'https://backstage.io/docs/overview/what-is-backstage',
              type: 'official'
            },
            {
              title: 'Internal Developer Platform (IDP) Concepts',
              url: 'https://internaldeveloperplatform.org/what-is-an-internal-developer-platform/',
              type: 'reference'
            },
            {
              title: 'Crossplane for Infrastructure APIs',
              url: 'https://docs.crossplane.io/latest/',
              type: 'official'
            },
            {
              title: 'Team Topologies for Platform Teams',
              url: 'https://teamtopologies.com/key-concepts',
              type: 'reference'
            }
          ],
          prerequisites: [
            'Advanced Kubernetes and container orchestration skills',
            'Experience with infrastructure automation and IaC',
            'Strong programming skills in at least one language',
            'Understanding of developer workflows and pain points',
            'Experience with API design and microservices architecture'
          ],
          successCriteria: [
            'Design and implement self-service infrastructure APIs',
            'Build developer portal with service catalog and documentation',
            'Create automated onboarding workflows for new services',
            'Implement golden path templates for common patterns',
            'Establish platform metrics and developer experience KPIs',
            'Enable teams to deploy without platform team intervention'
          ],
          difficulty: 'advanced'
        },
        {
          title: 'Master production operations and SRE practices',
          description: 'Implement SLOs, error budgets, incident response, and reliability engineering.',
          why: 'Why this matters: Production systems require systematic reliability practices.',
          track: 'bridge',
          progression: '🏗️ **Build:** Site Reliability Engineering expertise',
          resources: [
            {
              title: 'Google SRE Book',
              url: 'https://sre.google/sre-book/table-of-contents/',
              type: 'official'
            },
            {
              title: 'SLI, SLO, and Error Budgets',
              url: 'https://sre.google/sre-book/service-level-objectives/',
              type: 'official'
            },
            {
              title: 'Incident Response Guide',
              url: 'https://response.pagerduty.com/',
              type: 'reference'
            },
            {
              title: 'Chaos Engineering Principles',
              url: 'https://principlesofchaos.org/',
              type: 'reference'
            },
            {
              title: 'Prometheus Alerting Best Practices',
              url: 'https://prometheus.io/docs/practices/alerting/',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Production system operation experience',
            'Strong monitoring and observability background',
            'Understanding of distributed systems concepts',
            'Experience with incident management and troubleshooting',
            'Statistics and data analysis skills for reliability metrics'
          ],
          successCriteria: [
            'Define and implement SLIs and SLOs for critical services',
            'Establish error budget policies and consequences',
            'Build comprehensive incident response procedures',
            'Implement chaos engineering and disaster recovery testing',
            'Create on-call rotation and escalation procedures',
            'Develop reliability culture and practices across teams'
          ],
          difficulty: 'advanced'
        }
      ]
    }
  },
  ops: {
    title: "⚙️ Operations Track",
    levels: [
      {
        id: 'beginner',
        title: "I'm new to DevOps",
        description: "I manage servers, little automation"
      },
      {
        id: 'git',
        title: "I know Git basics",
        description: "I know Git commit, push, pull"
      },
      {
        id: 'infrastructure',
        title: "I provision infrastructure with code",
        description: "I use Terraform/CloudFormation"
      },
      {
        id: 'iac',
        title: "I have automated infrastructure deployment",
        description: "I deploy infra via CI/CD"
      },
      {
        id: 'containers',
        title: "I deploy applications with containers",
        description: "I understand Docker & orchestration"
      },
      {
        id: 'k8s-local',
        title: "I use local Kubernetes",
        description: "Local clusters for learning & testing"
      },
      {
        id: 'k8s-cloud',
        title: "I manage production Kubernetes",
        description: "I operate live EKS/GKE/AKS clusters"
      },
      {
        id: 'bridge',
        title: "🌉 Bridge Level: Learn Development",
        description: "Ready to learn coding & app development",
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
          progression: '🏗️ **Build:** Foundation for infrastructure automation',
          resources: [
            {
              title: 'Git Official Documentation',
              url: 'https://git-scm.com/doc',
              type: 'official'
            },
            {
              title: 'Pro Git Book - Version Control Basics',
              url: 'https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control',
              type: 'tutorial'
            },
            {
              title: 'Git Workflow for Infrastructure',
              url: 'https://www.atlassian.com/git/tutorials/comparing-workflows',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Git installed on your machine',
            'GitHub, GitLab, or Bitbucket account',
            'Existing infrastructure scripts or configs to version control',
            'Basic command line familiarity',
            'Text editor for commit messages'
          ],
          successCriteria: [
            'All infrastructure scripts and configs are in Git repositories',
            'Can commit, push, and pull changes confidently',
            'Understand branching for different environments (dev/prod)',
            'Can collaborate on infrastructure code via pull requests',
            'Track history of infrastructure changes over time'
          ],
          difficulty: 'beginner'
        },
        {
          title: 'Provision your first cloud VM through the console',
          description: 'Learn cloud basics by creating VMs in AWS, Azure, or GCP using the web interface.',
          why: 'Why this matters: Understand cloud concepts before automating them.',
          track: 'ops',
          progression: '🏗️ **Build:** Cloud infrastructure fundamentals',
          resources: [
            {
              title: 'AWS EC2 Getting Started',
              url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html',
              type: 'official'
            },
            {
              title: 'Azure Virtual Machines Quickstart',
              url: 'https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal',
              type: 'official'
            },
            {
              title: 'Google Cloud Compute Engine Quickstart',
              url: 'https://cloud.google.com/compute/docs/quickstart-linux',
              type: 'official'
            },
            {
              title: 'SSH Key Setup Guide',
              url: 'https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Cloud account (AWS/Azure/GCP) with billing set up',
            'SSH key pair generated',
            'Basic understanding of Linux/Windows server concepts',
            'Terminal or SSH client installed'
          ],
          successCriteria: [
            'Successfully create and launch a VM via cloud console',
            'Connect to VM via SSH (Linux) or RDP (Windows)',
            'Install and run a simple service on the VM',
            'Understand VM sizing, storage, and networking basics',
            'Can start, stop, and terminate VMs confidently',
            'Understand cloud billing and resource management'
          ],
          difficulty: 'beginner'
        }
      ],
      git: [
        {
          title: 'Automate VM creation with CLI tools and scripts',
          description: 'Replace console clicking with cloud CLI commands and basic automation scripts.',
          why: 'Why this matters: Manual clicking doesn\'t scale and creates inconsistency.',
          track: 'ops',
          progression: '🔀 **Replace:** Manual console work with CLI automation',
          resources: [
            {
              title: 'AWS CLI EC2 Commands',
              url: 'https://docs.aws.amazon.com/cli/latest/reference/ec2/',
              type: 'reference'
            },
            {
              title: 'Azure CLI VM Commands',
              url: 'https://docs.microsoft.com/en-us/cli/azure/vm',
              type: 'reference'
            },
            {
              title: 'Shell Scripting Tutorial',
              url: 'https://www.shellscript.sh/',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Experience creating VMs manually',
            'Cloud CLI installed and configured',
            'Basic shell scripting knowledge',
            'Understanding of infrastructure concepts'
          ],
          successCriteria: [
            'Can provision VMs entirely via CLI commands',
            'Scripts are reusable across different environments',
            'Proper error handling and validation in scripts',
            'Documentation for script parameters and usage',
            'Consistent VM configurations every time'
          ],
          difficulty: 'intermediate'
        },
        {
          title: 'Learn Infrastructure as Code with Terraform',
          description: 'Replace your scripts with proper IaC using Terraform or similar tools.',
          why: 'Why this matters: IaC is declarative, testable, and version controlled.',
          track: 'ops',
          progression: '🔀 **Replace:** Scripts with Infrastructure as Code',
          resources: [
            {
              title: 'Terraform Get Started Collection',
              url: 'https://developer.hashicorp.com/terraform/tutorials/aws-get-started',
              type: 'official'
            },
            {
              title: 'Terraform Language Documentation',
              url: 'https://developer.hashicorp.com/terraform/language',
              type: 'reference'
            },
            {
              title: 'Terraform AWS Provider',
              url: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs',
              type: 'reference'
            },
            {
              title: 'Infrastructure as Code Patterns',
              url: 'https://developer.hashicorp.com/terraform/intro',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Terraform installed locally',
            'Cloud account (AWS, Azure, or GCP) with programmatic access',
            'Cloud CLI configured with credentials',
            'Basic understanding of cloud resources (VMs, networks, storage)',
            'Text editor with Terraform syntax support'
          ],
          successCriteria: [
            'Successfully provision cloud infrastructure via Terraform',
            'Understand Terraform state management and lifecycle',
            'Can destroy and recreate infrastructure reliably',
            'Written reusable Terraform configuration files',
            'Understand terraform plan, apply, and destroy workflow',
            'Can manage different environments (dev, staging, prod)'
          ],
          difficulty: 'intermediate'
        }
      ],
      infrastructure: [
        {
          title: 'Deploy a sample application to learn app workflows',
          description: 'Use a simple Node.js or Python app to understand deployment patterns.',
          why: 'Why this matters: Understanding applications helps you support developers better.',
          track: 'ops',
          progression: '🏗️ **Build:** Your first application deployment',
          resources: [
            {
              title: 'Node.js Deployment Guide',
              url: 'https://nodejs.org/en/learn/getting-started/nodejs-with-webassembly',
              type: 'official'
            },
            {
              title: 'Python Flask Deployment',
              url: 'https://flask.palletsprojects.com/en/3.0.x/deploying/',
              type: 'official'
            },
            {
              title: 'Nginx Reverse Proxy Setup',
              url: 'https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/',
              type: 'tutorial'
            },
            {
              title: 'Process Management with PM2',
              url: 'https://pm2.keymetrics.io/docs/usage/quick-start/',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Terraform infrastructure provisioning experience',
            'Linux server administration skills',
            'Basic understanding of web applications',
            'SSH access to cloud VMs',
            'Web server concepts (HTTP, ports, domains)'
          ],
          successCriteria: [
            'Successfully deploy a sample web application to your infrastructure',
            'Configure reverse proxy and load balancing',
            'Implement process management and auto-restart',
            'Set up logging and basic monitoring for the application',
            'Understand application deployment lifecycle',
            'Can troubleshoot common application deployment issues'
          ],
          difficulty: 'intermediate'
        },
        {
          title: 'Build reusable Terraform modules',
          description: 'Refactor your Terraform code into reusable modules for different environments.',
          why: 'Why this matters: DRY principles and consistent infrastructure patterns.',
          track: 'ops',
          progression: '🔄 **Upgrade:** Basic Terraform to modular, reusable code',
          resources: [
            {
              title: 'Terraform Modules Documentation',
              url: 'https://developer.hashicorp.com/terraform/language/modules',
              type: 'official'
            },
            {
              title: 'Module Composition Patterns',
              url: 'https://developer.hashicorp.com/terraform/language/modules/develop',
              type: 'official'
            },
            {
              title: 'Terraform Registry Publishing',
              url: 'https://developer.hashicorp.com/terraform/registry/modules/publish',
              type: 'tutorial'
            },
            {
              title: 'Module Testing with Terratest',
              url: 'https://terratest.gruntwork.io/',
              type: 'reference'
            }
          ],
          prerequisites: [
            'Solid Terraform fundamentals and state management',
            'Experience with multiple environment deployments',
            'Understanding of infrastructure patterns and best practices',
            'Version control workflow for infrastructure code',
            'Basic testing concepts for infrastructure'
          ],
          successCriteria: [
            'Create reusable Terraform modules for common infrastructure patterns',
            'Implement proper module versioning and documentation',
            'Use modules across different environments (dev, staging, prod)',
            'Write tests for your infrastructure modules',
            'Publish modules to internal or public registries',
            'Establish module governance and contribution guidelines'
          ],
          difficulty: 'intermediate'
        }
      ],
      iac: [
        {
          title: 'Add CI/CD for infrastructure deployments',
          description: 'Automate Terraform deployments with GitHub Actions instead of manual runs.',
          why: 'Why this matters: Infrastructure changes should be tested and automated.',
          track: 'ops',
          progression: '➕ **Add:** Automation to infrastructure deployments',
          resources: [
            {
              title: 'GitHub Actions for Terraform',
              url: 'https://docs.github.com/en/actions/deployment/deploying-with-github-actions/deploying-to-amazon-elastic-container-service',
              type: 'official'
            },
            {
              title: 'Terraform Cloud Integration',
              url: 'https://developer.hashicorp.com/terraform/cloud-docs/run/cli',
              type: 'official'
            },
            {
              title: 'Infrastructure Testing Strategies',
              url: 'https://developer.hashicorp.com/terraform/tutorials/automation/automate-terraform',
              type: 'tutorial'
            },
            {
              title: 'Terraform Plan Analysis',
              url: 'https://github.com/hashicorp/setup-terraform',
              type: 'example'
            }
          ],
          prerequisites: [
            'Terraform modules and multi-environment experience',
            'Git workflow and pull request processes',
            'Basic GitHub Actions or CI/CD pipeline knowledge',
            'Infrastructure testing concepts',
            'Understanding of infrastructure security and secrets management'
          ],
          successCriteria: [
            'Terraform deployments triggered automatically via CI/CD',
            'Infrastructure changes reviewed via plan outputs in PRs',
            'Automated testing validates infrastructure before deployment',
            'Secrets and credentials securely managed in pipeline',
            'Rollback procedures implemented for failed deployments',
            'Multi-environment promotion workflow established'
          ],
          difficulty: 'intermediate'
        },
        {
          title: 'Learn Docker and containerize applications',
          description: 'Understand how developers package apps and deploy containers.',
          why: 'Why this matters: Containers are the modern application deployment standard.',
          track: 'ops',
          progression: '🏗️ **Build:** Container deployment expertise',
          resources: [
            {
              title: 'Docker Official Getting Started',
              url: 'https://docs.docker.com/get-started/',
              type: 'official'
            },
            {
              title: 'Dockerfile Best Practices',
              url: 'https://docs.docker.com/develop/dev-best-practices/',
              type: 'official'
            },
            {
              title: 'Docker Compose for Multi-Container Apps',
              url: 'https://docs.docker.com/compose/',
              type: 'official'
            },
            {
              title: 'Container Security Scanning',
              url: 'https://docs.docker.com/engine/scan/',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Linux command line and system administration experience',
            'Understanding of application deployment and dependencies',
            'Network concepts (ports, protocols, routing)',
            'Basic knowledge of application architecture',
            'Experience with infrastructure provisioning'
          ],
          successCriteria: [
            'Successfully containerize existing applications with Docker',
            'Build efficient Docker images with multi-stage builds',
            'Use Docker Compose for local development environments',
            'Implement container security scanning and best practices',
            'Understand container networking and storage concepts',
            'Deploy containers to production infrastructure'
          ],
          difficulty: 'intermediate'
        }
      ],
      containers: [
        {
          title: 'Build container infrastructure with Terraform',
          description: 'Provision container registries, ECS clusters, or container-ready infrastructure.',
          why: 'Why this matters: Infrastructure should support modern application patterns.',
          track: 'ops',
          progression: '🔄 **Upgrade:** VM-focused infrastructure to container-ready platform',
          resources: [
            {
              title: 'AWS ECS with Terraform',
              url: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_cluster',
              type: 'reference'
            },
            {
              title: 'Container Registry Setup',
              url: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecr_repository',
              type: 'reference'
            },
            {
              title: 'Application Load Balancer for Containers',
              url: 'https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html',
              type: 'official'
            },
            {
              title: 'Container Networking Best Practices',
              url: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Advanced Terraform skills with modules and state management',
            'Docker containerization experience',
            'Understanding of container orchestration concepts',
            'Cloud networking and security group configuration',
            'Load balancing and service discovery concepts'
          ],
          successCriteria: [
            'Provision container registries and image repositories',
            'Deploy container orchestration platform (ECS, EKS, etc.)',
            'Configure load balancers and service discovery',
            'Implement container networking and security policies',
            'Set up logging and monitoring for container infrastructure',
            'Deploy and manage containerized applications at scale'
          ],
          difficulty: 'intermediate'
        },
        {
          title: 'Learn Kubernetes locally with kind or Docker Desktop',
          description: 'Set up local K8s cluster and deploy sample applications.',
          why: 'Why this matters: Learn K8s fundamentals before managing production clusters.',
          track: 'ops',
          progression: '🏗️ **Build:** Kubernetes administration skills',
          resources: [
            {
              title: 'Kubernetes Administration Basics',
              url: 'https://kubernetes.io/docs/concepts/overview/components/',
              type: 'official'
            },
            {
              title: 'kind (Kubernetes in Docker)',
              url: 'https://kind.sigs.k8s.io/docs/user/quick-start/',
              type: 'official'
            },
            {
              title: 'kubectl Administration Guide',
              url: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/',
              type: 'reference'
            },
            {
              title: 'Kubernetes Cluster Administration',
              url: 'https://kubernetes.io/docs/tasks/administer-cluster/',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Container infrastructure and orchestration understanding',
            'Docker and containerization expertise',
            'Linux system administration skills',
            'Networking concepts (DNS, load balancing, ingress)',
            'YAML configuration and troubleshooting skills'
          ],
          successCriteria: [
            'Successfully deploy and manage local Kubernetes cluster',
            'Deploy multi-tier applications using K8s manifests',
            'Configure services, ingress, and networking',
            'Implement resource limits, quotas, and policies',
            'Monitor cluster health and troubleshoot common issues',
            'Understand K8s architecture and control plane components'
          ],
          difficulty: 'advanced'
        }
      ],
      'k8s-local': [
        {
          title: 'Master Kubernetes networking and storage',
          description: 'Configure services, ingress, persistent volumes, and network policies.',
          why: 'Why this matters: Production K8s requires understanding these core concepts.',
          track: 'ops',
          progression: '🏗️ **Build:** Production-ready K8s knowledge',
          resources: [
            {
              title: 'Kubernetes Networking Concepts',
              url: 'https://kubernetes.io/docs/concepts/services-networking/',
              type: 'official'
            },
            {
              title: 'Persistent Volumes and Storage',
              url: 'https://kubernetes.io/docs/concepts/storage/persistent-volumes/',
              type: 'official'
            },
            {
              title: 'Network Policies Guide',
              url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/',
              type: 'official'
            },
            {
              title: 'Ingress Controllers Deep Dive',
              url: 'https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Local Kubernetes cluster administration experience',
            'Understanding of K8s core resources and concepts',
            'Network administration and troubleshooting skills',
            'Storage concepts and file system knowledge',
            'Security principles for network segmentation'
          ],
          successCriteria: [
            'Configure advanced networking with multiple ingress controllers',
            'Implement persistent storage for stateful applications',
            'Deploy and manage network policies for micro-segmentation',
            'Troubleshoot complex networking and storage issues',
            'Optimize storage performance and backup strategies',
            'Design multi-tenant networking architecture'
          ],
          difficulty: 'advanced'
        },
        {
          title: 'Deploy and manage production Kubernetes cluster',
          description: 'Set up EKS, GKE, or AKS with proper networking, security, and monitoring.',
          why: 'Why this matters: Production K8s has different requirements than local development.',
          track: 'ops',
          progression: '🔄 **Upgrade:** Local K8s skills to production cluster management',
          resources: [
            {
              title: 'Amazon EKS Cluster Management',
              url: 'https://docs.aws.amazon.com/eks/latest/userguide/clusters.html',
              type: 'official'
            },
            {
              title: 'Google GKE Administration',
              url: 'https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-administration',
              type: 'official'
            },
            {
              title: 'Azure AKS Operations',
              url: 'https://docs.microsoft.com/en-us/azure/aks/operator-best-practices-cluster-security',
              type: 'official'
            },
            {
              title: 'Kubernetes Production Readiness',
              url: 'https://kubernetes.io/docs/setup/production-environment/tools/',
              type: 'reference'
            }
          ],
          prerequisites: [
            'Advanced local Kubernetes administration skills',
            'Cloud platform expertise (AWS/GCP/Azure)',
            'Production infrastructure management experience',
            'Security and compliance understanding',
            'Monitoring and observability platform knowledge'
          ],
          successCriteria: [
            'Deploy production-grade managed Kubernetes cluster',
            'Implement comprehensive security controls and RBAC',
            'Configure high availability and disaster recovery',
            'Set up centralized logging and monitoring',
            'Establish backup and restore procedures',
            'Create operational runbooks and incident response plans'
          ],
          difficulty: 'advanced'
        }
      ],
      'k8s-cloud': [
        {
          title: 'Implement Kubernetes security and compliance',
          description: 'Configure RBAC, network policies, pod security standards, and compliance scanning.',
          why: 'Why this matters: Production K8s requires comprehensive security controls.',
          track: 'ops',
          progression: '➕ **Add:** Security and compliance to K8s operations',
          resources: [
            {
              title: 'Kubernetes RBAC Authorization',
              url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
              type: 'official'
            },
            {
              title: 'Pod Security Standards',
              url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/',
              type: 'official'
            },
            {
              title: 'Kubernetes Security Best Practices',
              url: 'https://kubernetes.io/docs/concepts/security/',
              type: 'reference'
            },
            {
              title: 'Falco Runtime Security',
              url: 'https://falco.org/docs/',
              type: 'tutorial'
            },
            {
              title: 'CIS Kubernetes Benchmark',
              url: 'https://www.cisecurity.org/benchmark/kubernetes',
              type: 'reference'
            }
          ],
          prerequisites: [
            'Production Kubernetes cluster administration',
            'Strong security and compliance background',
            'Understanding of identity and access management',
            'Network security and segmentation concepts',
            'Experience with security scanning and assessment tools'
          ],
          successCriteria: [
            'Implement comprehensive RBAC policies and service accounts',
            'Deploy pod security policies and admission controllers',
            'Configure network policies for zero-trust architecture',
            'Implement runtime security monitoring and alerting',
            'Conduct security assessments and compliance audits',
            'Establish security governance and incident response procedures'
          ],
          difficulty: 'advanced'
        },
        {
          title: 'Implement GitOps for K8s application lifecycle',
          description: 'Set up ArgoCD or Flux for declarative application deployment and management.',
          why: 'Why this matters: GitOps provides safe, auditable, and scalable K8s operations.',
          track: 'ops',
          progression: '🔀 **Replace:** Manual K8s operations with GitOps automation',
          resources: [
            {
              title: 'ArgoCD Documentation',
              url: 'https://argo-cd.readthedocs.io/en/stable/',
              type: 'official'
            },
            {
              title: 'Flux GitOps Toolkit',
              url: 'https://fluxcd.io/flux/',
              type: 'official'
            },
            {
              title: 'GitOps Principles and Practices',
              url: 'https://opengitops.dev/',
              type: 'reference'
            },
            {
              title: 'GitOps Security Best Practices',
              url: 'https://cloud.google.com/architecture/managing-infrastructure-as-code',
              type: 'tutorial'
            }
          ],
          prerequisites: [
            'Production Kubernetes cluster with security controls',
            'Advanced Git workflows and repository management',
            'CI/CD pipeline design and implementation experience',
            'Infrastructure as Code and declarative configuration',
            'Understanding of application deployment patterns'
          ],
          successCriteria: [
            'Deploy and configure GitOps operators (ArgoCD/Flux)',
            'Implement declarative application deployment workflows',
            'Set up multi-environment promotion pipelines',
            'Configure automated rollback and disaster recovery',
            'Establish GitOps governance and access controls',
            'Monitor and alert on deployment health and drift detection'
          ],
          difficulty: 'advanced'
        }
      ],
      bridge: [
        {
          title: 'Build your first web application from scratch',
          description: 'Create a REST API or web app in Node.js, Python, or Go to understand development workflows.',
          why: 'Why this matters: Understanding how apps are built makes you better at deploying them.',
          track: 'bridge',
          progression: '🏗️ **Build:** Your first application as an ops person',
          resources: [
            {
              title: 'Node.js Getting Started',
              url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
              type: 'official'
            },
            {
              title: 'Express.js Tutorial',
              url: 'https://expressjs.com/en/starter/hello-world.html',
              type: 'tutorial'
            },
            {
              title: 'Python Flask Quickstart',
              url: 'https://flask.palletsprojects.com/en/3.0.x/quickstart/',
              type: 'official'
            },
            {
              title: 'REST API Design Best Practices',
              url: 'https://restfulapi.net/',
              type: 'reference'
            }
          ],
          prerequisites: [
            'Strong infrastructure and operations background',
            'Basic programming concepts (variables, functions, loops)',
            'Text editor or IDE installed',
            'Node.js/Python/Go runtime installed',
            'Willingness to learn programming fundamentals'
          ],
          successCriteria: [
            'Built a working REST API with multiple endpoints',
            'Understand HTTP methods (GET, POST, PUT, DELETE)',
            'Successfully handle request/response data (JSON)',
            'Implement basic error handling and logging',
            'Connect to a database and perform CRUD operations',
            'Understand application architecture from dev perspective'
          ],
          difficulty: 'intermediate'
        },
        {
          title: 'Add developer tooling to your workflow',
          description: 'Learn package managers, testing, linting, and developer tools for your new app.',
          why: 'Why this matters: Bridge the gap between infrastructure and application development.',
          track: 'bridge',
          progression: '➕ **Add:** Development practices to your skillset',
          resources: [
            {
              title: 'npm Package Management',
              url: 'https://docs.npmjs.com/getting-started',
              type: 'official'
            },
            {
              title: 'Jest Testing Framework',
              url: 'https://jestjs.io/docs/getting-started',
              type: 'official'
            },
            {
              title: 'ESLint Code Linting',
              url: 'https://eslint.org/docs/latest/use/getting-started',
              type: 'official'
            },
            {
              title: 'GitHub Actions for Node.js',
              url: 'https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs',
              type: 'tutorial'
            },
            {
              title: 'Developer Experience Best Practices',
              url: 'https://dx.tips/',
              type: 'reference'
            }
          ],
          prerequisites: [
            'Working web application built from scratch',
            'Understanding of application development lifecycle',
            'Basic programming concepts and debugging skills',
            'Git workflow and version control experience',
            'CI/CD pipeline concepts from infrastructure perspective'
          ],
          successCriteria: [
            'Set up package management and dependency handling',
            'Implement comprehensive testing strategy (unit, integration)',
            'Configure code linting and formatting tools',
            'Build CI/CD pipeline for application development',
            'Establish code quality gates and automated checks',
            'Create developer documentation and contribution guidelines'
          ],
          difficulty: 'intermediate'
        },
        {
          title: 'Learn application debugging and performance',
          description: 'Understand how developers debug apps, profile performance, and optimize code.',
          why: 'Why this matters: Help developers solve problems instead of just managing infrastructure.',
          track: 'bridge',
          progression: '🏗️ **Build:** Developer mindset and troubleshooting skills',
          resources: [
            {
              title: 'Node.js Debugging Guide',
              url: 'https://nodejs.org/en/learn/getting-started/debugging',
              type: 'official'
            },
            {
              title: 'Chrome DevTools Documentation',
              url: 'https://developer.chrome.com/docs/devtools/',
              type: 'official'
            },
            {
              title: 'Application Performance Monitoring',
              url: 'https://newrelic.com/blog/best-practices/apm-best-practices',
              type: 'reference'
            },
            {
              title: 'JavaScript Profiling and Optimization',
              url: 'https://web.dev/articles/optimize-javascript-execution',
              type: 'tutorial'
            },
            {
              title: 'Database Query Optimization',
              url: 'https://use-the-index-luke.com/',
              type: 'reference'
            }
          ],
          prerequisites: [
            'Full-stack application with developer tooling implemented',
            'Understanding of application architecture and data flow',
            'Experience with monitoring and observability tools',
            'Database concepts and query optimization basics',
            'Performance testing and load testing familiarity'
          ],
          successCriteria: [
            'Master debugging techniques for application issues',
            'Implement comprehensive application performance monitoring',
            'Optimize application code for performance and scalability',
            'Troubleshoot complex application-infrastructure interactions',
            'Design performance testing and optimization workflows',
            'Bridge communication gaps between dev and ops teams'
          ],
          difficulty: 'advanced'
        }
      ]
    }
  }
};
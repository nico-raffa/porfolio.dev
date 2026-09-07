/**
 * English content. Same rules as es.ts: no figure that is not in section 4 of the
 * dossier, never "Senior"/"Architect"/"AI Specialist", English is declared as B1,
 * and no experience is claimed on Kubernetes, AWS, Azure, Next.js, GraphQL,
 * microservices, Kafka, Terraform, E2E testing, React Native, Java, C# or PHP.
 */
import type { Dict } from './types';

export const en: Dict = {
  meta: {
    title: 'Nicolás Raffagnini — Full Stack Developer (Backend & DevOps)',
    description:
      'I own the product end to end: requirements, data modeling, backend, frontend and infrastructure. A multi-agent AI system driving +30% retail sales, and an ERP in production with 33 modules on self-hosted infrastructure.',
    otherLangShort: 'ES',
    switchTo: 'View this page in Spanish',
  },

  nav: {
    skip: 'Skip to content',
    print: 'Print',
    printTitle: 'Print this page as an A4 résumé',
    download: 'Download CV',
    downloadTitle: 'Download the CV as PDF (English)',
    theme: 'Switch between light and dark theme',
    cvPage: 'One-page CV',
    cvPageTitle: 'See the full CV on a single page, ready to print',
    portfolio: 'Portfolio',
    portfolioTitle: 'Back to the portfolio',
    sections: {
      cases: 'Cases',
      stack: 'Stack',
      experience: 'Experience',
      contact: 'Contact',
    },
  },

  hero: {
    headline: 'I own the product end to end.',
    sub: 'Gathering requirements with the client, data modeling, backend, frontend, infrastructure and production support. Today I maintain an ERP with 7 daily users and a multi-agent AI system already driving real sales.',
    what: 'What sets me apart',
    differentiators: [
      'A multi-agent system in production with a measured business result, not a demo.',
      'I own the infrastructure, not just the code: a self-hosted server configured from scratch and a CI/CD pipeline I built myself.',
      'Technical lead of a 3-developer team, working directly with the client.',
    ],
  },

  cta: {
    write: 'Email me',
    writeTitle: 'Open your mail client to write to me',
    whatsapp: 'WhatsApp',
    whatsappTitle: 'Message me on WhatsApp',
    cv: 'Download CV',
    github: 'View GitHub',
    linkedin: 'View LinkedIn',
  },

  proof: {
    labels: {
      sales: 'more retail sales',
      modules: 'business modules in production',
      tests: 'automated tests',
      savings: 'saved on infrastructure per month',
    },
    note: 'Figures from the ERP and the multi-agent system I maintain at NBG today. Each one is explained in the cases below.',
  },

  identity: {
    role: 'Full Stack Developer · Backend & DevOps',
    availability: 'Open to opportunities · remote or Rosario',
    positioning:
      'I take part in the whole product cycle: gathering requirements with the client, data modeling, backend and frontend development, deployment and infrastructure, and production support. Today I maintain an ERP in production and a multi-agent AI system already driving real sales.',
    photoAlt: 'Nicolás Raffagnini',
    copy: 'Copy email address',
    copied: 'Copied',
    whatsapp: 'WhatsApp',
  },

  stack: {
    title: 'Stack',
    note: 'Technologies used professionally in production, and defensible in a technical interview.',
    groups: [
      {
        label: 'Backend',
        items: ['Node.js 22 (ESM)', 'TypeScript', 'JavaScript', 'Express', 'REST APIs', 'Socket.IO', 'node-cron', 'Joi', 'Winston'],
      },
      {
        label: 'Data',
        items: ['MySQL / MariaDB', 'MongoDB', 'Redis', 'Sequelize', 'Mongoose', 'ER modeling', 'Transactions and row locking'],
      },
      {
        label: 'Frontend',
        items: ['React 18', 'Vite', 'React Router', 'Zustand', 'Tailwind CSS', 'Material UI', 'Radix UI', 'Recharts'],
      },
      {
        label: 'Security',
        items: ['RBAC with a declarative catalog', 'JWT in an httpOnly cookie', 'Double-submit CSRF', 'Helmet', 'CORS allowlist', 'Rate limiting'],
      },
      {
        label: 'Testing',
        items: ['Mocha', 'Chai', 'Sinon', 'Supertest', 'Postman'],
      },
      {
        label: 'Infrastructure',
        items: ['Linux', 'Nginx', 'Docker', 'Docker Compose', 'GitHub Actions', 'GHCR', 'Google Cloud (Cloud Run)', 'Vercel', 'Render', 'rclone + systemd'],
      },
      {
        label: 'AI',
        items: ['Multi-agent systems', 'Gemini API', 'Embeddings and cosine similarity', 'Claude Code'],
      },
      {
        label: 'Process',
        items: ['SCRUM', 'Trello', 'PR code review', 'Branch and commit conventions', 'Versioned migrations'],
      },
    ],
    declaredLabel: 'Knowledge without a production project',
    declared: ['PostgreSQL', 'Python'],
  },

  experience: {
    title: 'Experience',
    present: 'present',
    details: 'Technical detail',
    oneLiners: {
      nbg: 'An ERP in production and a multi-agent sales system. Technical lead of a 3-developer team.',
      wotech: 'Led 3 developers for 12 months under SCRUM: 8 modules delivered across ~24 sprints.',
      nocountry: 'Coordinated 3 backend developers inside a 9-person team and built the MVP scoring and matching algorithm.',
    },
    jobs: {
      nbg: {
        role: 'Full Stack Developer · Backend · Frontend · DevOps',
        summary:
          'Two parallel tracks: the company ERP and the multi-agent sales system. Docker every day: containerized local environment, image built in the pipeline and containerized deployment on a self-hosted server.',
        projects: [
          {
            name: 'Multi-agent automated sales system',
            highlight: '+30% in retail sales',
            summary:
              'Several coordinated agents automate the retail sales cycle. TypeScript, Gemini API for agent reasoning, Redis for state and queues, MySQL for persistence.',
            details: [
              'A seller-agent uses Gemini to compute 768-dimension embeddings for every product; the ERP consumes them for its semantic search. That is the contact point between both systems.',
              'Redis holds each conversation state and the queues between agents.',
              'The result is measured against the last 3 months of sales statistics. This is not a demo: it runs in production.',
              'Claude as an assistant during development: prompts, refactors and technical documentation.',
            ],
            stack: ['TypeScript', 'Gemini API', 'Redis', 'MySQL', 'Docker'],
          },
          {
            name: 'WWSystem · custom ERP for the nutritional supplements industry',
            highlight: 'Technical lead, team of 3',
            summary:
              'Full-stack, multi-role ERP covering the whole operation, from raw material purchasing to invoice collection. In production, with 7 daily users across sales, plant, back office and management. First version in under 6 months; ~1,065 commits of my own out of ~2,500 (~42%).',
            details: [
              'Complete RBAC system: a declarative permission catalog `<resource>.<action>.<scope>` as the single source for both the code and the migration seed, 7 roles, data scopes (own vs all) enforced in the services, SQL resolution with an in-memory cache (explicit invalidation + 5-minute TTL) and a generic `requirePermission()` middleware. The administrator has no bypass in code: the wildcard comes from the database.',
              'End-to-end purchase orders: draft → quoted → issued → invoiced → received → reconciled, with an append-only event ledger, reversal by storno (never deletion), a quantity-difference inbox and an inconsistency circuit splitting three permissions across three owners. Transactionally integrated with stock, expenses and the VAT ledger.',
              'Administrative and accounting circuit: hierarchical chart of accounts, expenses with two status axes (payment and document), due dates and partial payments, recurring expenses by cron and supplier current accounts.',
              'VAT ledger and tax breakdown engine: taxable base derived from the gross amount, with the net figure taken by difference so the total matches the invoiced amount exactly.',
              'Financial instrument portfolio (checks and e-checks) as a cross-cutting module between collections and payments: the same instrument comes in through a collection and goes out through a payment, with audited transitions.',
              'Append-only audit trail with before/after snapshots of ~20 entities, scoped against the stock ledgers so nothing is recorded twice.',
              'Semantic product search with 768-dimension embeddings and in-memory cosine similarity, with the cache warmed at startup; price and stock are never embedded, they are read live.',
              'Architectural refactor of the backend from a horizontal layout to self-contained vertical features —a modular monolith of 33 modules— with explicit dependency rules and cycles resolved through lazy loading.',
              'Transactions with `SELECT ... FOR UPDATE` on every operation that moves stock or money, with a single gate that prevents negative balances.',
              'Infrastructure: multi-stage Docker and Compose, GitHub Actions publishing images to GHCR and deploying through a self-hosted runner, two isolated environments (production and testing) behind an NGINX gateway terminating TLS, daily backup to Google Drive with rclone + systemd and GFS retention (7 daily / 4 weekly / 12 monthly) with dump integrity verification.',
              'System scale: ~158,000 lines of code, 3 repositories, 58 tables, 221 versioned migrations, ~287 REST endpoints and ~1,059 automated tests.',
            ],
            stack: ['Node.js 22', 'Express 4', 'Sequelize', 'MySQL / MariaDB', 'React 18', 'Vite', 'Tailwind CSS', 'Socket.IO', 'Docker', 'GitHub Actions', 'Nginx'],
          },
        ],
      },
      wotech: {
        role: 'Technical Lead and Full Stack Developer',
        summary:
          'Led a team of 3 developers for 12 months under SCRUM, across ~24 two-week sprints. An end-to-end management system for a carpentry business: 8 modules delivered plus 6 more months of maintenance and server administration.',
        details: [
          'Brought the client into the agile process: a demo per sprint, continuous validation and a backlog tuned to what was critical for the business. They were part of the cycle, not the recipient at the end.',
          'Modules delivered: raw materials, suppliers, furniture blueprints, and cost and time estimation, among others.',
          'A full year running the team and the client relationship, not a single sprint.',
        ],
        stack: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'React', 'Tailwind CSS', 'Vercel', 'Render'],
      },
      nocountry: {
        role: 'Backend Developer and team lead · professional practice',
        summary:
          'A 10-month professional practice in a simulated work environment. I coordinated the backend team —3 developers— inside a 9-person multidisciplinary team: 3 backend, 2 frontend, 2 designers and 2 QA.',
        details: [
          'Built the scoring and matching algorithm, the core feature of the MVP.',
          'Implemented the services with Node.js, Express, MongoDB, Mongoose and Socket.io; endpoints documented and tested with Postman.',
          'Certificate of participation for the technical contribution.',
        ],
        stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Socket.io', 'Postman'],
      },
    },
  },

  cases: {
    title: 'Cases',
    note: 'Five real problems: the situation, what I did and the result. The figures come from the dossier, unrounded.',
    decisionsTitle: 'Technical decisions',
    decisionsNote: 'Three real problems and what I did about them.',
    situation: 'Situation',
    action: 'What I did',
    result: 'Result',
    items: {
      multiagente: {
        tag: 'AI in production',
        title: 'A multi-agent system that sells on its own',
        metricLabel: 'more retail sales, measured against the last 3 months of statistics',
        situation:
          'The retail sales cycle was manual: every inquiry was handled by a person, end to end.',
        action:
          'I designed an orchestration of several agents in TypeScript on top of the Gemini API, with Redis for each conversation state and the queues between agents, and MySQL for persistence. Claude as a development assistant: prompts, refactors and documentation.',
        result:
          '~30% more retail sales in the last 3 months of statistics. This is not a demo or a course project: it runs in production.',
        details: [
          'A seller-agent uses Gemini to compute 768-dimension embeddings for every product; the ERP consumes them for its semantic search. That is the contact point between both systems.',
          'Redis holds each conversation state and the queues between agents.',
          'It runs containerized on the same self-hosted server as the ERP.',
        ],
      },
      erp: {
        tag: 'End-to-end product',
        title: 'WWSystem · the ERP that replaced a factory’s spreadsheets',
        metricLabel: 'business modules in production, plus 8 shared ones',
        situation:
          'A nutritional supplements factory ran its entire operation on spreadsheets and manual processes, with no traceability and no real stock control.',
        action:
          'I built a full-stack, multi-role ERP covering everything from raw material purchasing to invoice collection: data modeling, backend, frontend, infrastructure and support. I am the technical lead of the project in a 3-developer team, with ~1,065 commits of my own out of ~2,500 (~42%).',
        result:
          'In production with 7 daily users across sales, plant, back office and management. First version in under 6 months. Today: ~158,000 lines, 58 tables, 221 versioned migrations, ~287 REST endpoints and ~1,059 automated tests.',
        details: [
          'End-to-end purchase orders: draft → quoted → issued → invoiced → received → reconciled, with an append-only event ledger and reversal by storno, never by deletion.',
          'Administrative and accounting circuit: hierarchical chart of accounts, expenses with two status axes, due dates and partial payments, recurring expenses by cron and supplier current accounts.',
          'VAT ledger and tax breakdown engine: taxable base derived from the gross amount, with the net figure taken by difference so the total matches the invoiced amount exactly.',
          'Financial instrument portfolio (checks and e-checks) as a cross-cutting module between collections and payments: the same instrument comes in through a collection and goes out through a payment, with audited transitions.',
          'Append-only audit trail with before/after snapshots of ~20 entities, scoped against the stock ledgers so nothing is recorded twice.',
          'Semantic product search with 768-dimension embeddings and in-memory cosine similarity, with the cache warmed at startup; price and stock are never embedded, they are read live.',
          'Architectural refactor of the backend from a horizontal layout to self-contained vertical features —a modular monolith of 33 modules— with explicit dependency rules and cycles resolved through lazy loading.',
          'Transactions with `SELECT ... FOR UPDATE` on every operation that moves stock or money, with a single gate that prevents negative balances.',
        ],
      },
      infra: {
        tag: 'Infrastructure',
        title: 'Cloud costs against seven internal users',
        metricLabel: 'saved per month, against a one-time USD 650 investment',
        situation:
          'The ERP ran on Google Cloud (Cloud Run + MySQL instances), chosen initially for high availability. The monthly cost weighed on a small operation.',
        action:
          'I measured the actual spend against the actual usage, proposed a self-hosted server and configured it from scratch: operating system, Nginx, Node.js, MySQL and Docker containers. Then I built the CI/CD with GitHub Actions.',
        result:
          'USD 150 per month saved against a one-time USD 650 investment, paid back in under 5 months. Deploy time went from ~10 minutes to 2:30 (−75%).',
        details: [
          'Two isolated environments —production and testing— behind an NGINX gateway that terminates TLS.',
          'GitHub Actions publishes the images to GHCR and deploys through a self-hosted runner.',
          'Daily backup to Google Drive with rclone + systemd, GFS retention (7 daily / 4 weekly / 12 monthly) and dump integrity verification.',
          'The trade-off is explicit: less high availability was accepted for an operation with 7 internal users.',
        ],
      },
      rbac: {
        tag: 'Security',
        title: 'Authorization hardcoded across ~287 endpoints',
        metricLabel: 'REST endpoints, with authorization declared in a single place',
        situation:
          'Authorization was written by hand per role, with `xOrAdmin`-style middlewares scattered across the routes. Every new role or exception meant touching code in several places.',
        action:
          'I designed a declarative permission catalog as the single source for both the code and the migration seed, a generic `requirePermission()` middleware, SQL resolution with a cache (explicit invalidation when roles are edited, plus a 5-minute TTL as a safety net) and data scopes enforced inside the services.',
        result:
          'A single place where who-can-do-what is declared, with an automated test validating the catalog’s consistency. I removed the administrator bypass from the code: the admin gets the wildcard from the database, so all authorization goes through the same path.',
        details: [
          'The catalog uses the `<resource>.<action>.<scope>` shape and feeds both the code and the migration seed: there is no second source of truth.',
          '7 roles, with data scopes (`own` vs `all`) enforced inside the services, not in the routes.',
          'Explicit invalidation covers the normal case; the 5-minute TTL is the safety net in case a node misses an event.',
        ],
      },
      recepcion: {
        tag: 'Domain modeling',
        title: 'Three permissions for a single fact',
        metricLabel: 'deliberately separate permissions for three different owners',
        situation:
          'On goods receipt, the plant operator sees the flagged goods, but whoever decides if they are accepted with a deviation or returned is the back office.',
        action:
          'I split three deliberately distinct permissions: plant reports, back office decides and plant confirms the entry into stock, with the event recorded in an append-only ledger.',
        result:
          'The circuit reflects each department’s actual responsibility. A single permission would have given the plant the power to accept expired goods into stock.',
        details: [
          'The append-only ledger records the fact along with its owner: who reported, who decided and who confirmed.',
          'The circuit is transactionally integrated with stock, expenses and the VAT ledger.',
        ],
      },
    },
  },

  testimonials: {
    title: 'References',
    note: 'What the people I worked with have to say.',
  },

  education: {
    title: 'Education',
    items: {
      tecnicatura: 'Higher Technical Degree in Software Development',
      coursera: 'Generative AI Software Engineering Specialization',
      microsoft: 'Agentic AI systems development',
      coderhouse: 'Node.js Backend Development · React Frontend Development',
    },
    languagesTitle: 'Languages',
    languages: [
      'Spanish — native',
      'English — B1. I read technical documentation and write in English; fluent conversation, not yet.',
    ],
  },

  contact: {
    title: 'Contact',
    lead: 'If you are looking for someone who owns the backend and also what happens after the deploy, write to me.',
    updated: 'Last updated: August 2026',
    builtWith: 'Static site built with Astro and Tailwind CSS.',
  },

  diagrams: {
    agents: {
      title: 'Multi-agent system flow',
      desc: 'The customer comes in through the sales channel, the orchestrator distributes work across the agents, the agents reason against the Gemini API, Redis holds state and queues, MySQL persists, and the seller-agent hands the ERP the 768-dimension embeddings that power its semantic search.',
      nodes: {
        client: 'Customer',
        orchestrator: 'Orchestrator',
        agents: 'Coordinated agents',
        seller: 'seller-agent',
        others: 'other agents',
        gemini: 'Gemini API',
        redis: 'Redis',
        redisNote: 'state + queues',
        mysql: 'MySQL',
        mysqlNote: 'persistence',
        erp: 'ERP',
        erpNote: 'semantic search',
        embeddings: '768d embeddings',
      },
    },
    purchaseOrder: {
      title: 'Purchase order circuit',
      desc: 'A purchase order moves through six states, from draft to reconciled. Every transition is written to an append-only ledger, and an order is never deleted: it is reversed by storno.',
      states: ['Draft', 'Quoted', 'Issued', 'Invoiced', 'Received', 'Reconciled'],
      ledger: 'Append-only event ledger',
      storno: 'Reversal by storno · never deleted',
    },
    infra: {
      title: 'Pipeline and infrastructure',
      desc: 'A push triggers GitHub Actions, which publishes the image to GHCR; a self-hosted runner deploys it on the self-hosted server, behind an NGINX gateway that terminates TLS over two isolated environments. A daily backup with rclone and systemd uploads to Google Drive with GFS retention.',
      nodes: {
        push: 'push',
        actions: 'GitHub Actions',
        ghcr: 'GHCR',
        runner: 'Self-hosted runner',
        nginx: 'NGINX gateway',
        nginxNote: 'terminates TLS',
        prod: 'Production',
        test: 'Testing',
        backup: 'rclone + systemd',
        drive: 'Google Drive',
        gfs: 'GFS 7 / 4 / 12',
        deploy: 'deploy 2:30',
      },
    },
  },
};

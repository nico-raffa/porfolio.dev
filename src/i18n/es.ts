/**
 * Contenido en español. Reglas que salen del propio dossier
 * (perfil-nicolas-raffagnini.md, secciones 0 y 9) y que no se negocian:
 *
 *  - Ninguna cifra que no esté en la sección 4 del dossier.
 *  - Nunca "Senior", "Arquitecto" ni "Especialista en IA".
 *  - Inglés B1, declarado.
 *  - No se afirma experiencia en Kubernetes, AWS, Azure, Next.js, GraphQL,
 *    microservicios, Kafka, Terraform, testing E2E, React Native, Java, C# ni PHP.
 *    El ERP es un monolito modular, nunca "microservicios".
 *  - PostgreSQL y Python van rotulados como conocimiento, no como experiencia.
 *  - El dato antes que el adjetivo. Sin superlativos.
 */

export const es = {
  meta: {
    title: 'Nicolás Raffagnini — Desarrollador Full Stack (Backend & DevOps)',
    description:
      'Me hago cargo del producto de punta a punta: relevamiento, modelado, backend, frontend e infraestructura. Un sistema multiagente de IA con +30% en ventas y un ERP en producción con 33 módulos y servidor propio.',
    otherLangShort: 'EN',
    switchTo: 'Ver esta página en inglés',
  },

  nav: {
    skip: 'Ir al contenido',
    print: 'Imprimir',
    printTitle: 'Imprimir esta página como CV en A4',
    download: 'Descargar CV',
    downloadTitle: 'Descargar el CV en PDF (español)',
    theme: 'Cambiar entre tema claro y oscuro',
    /** Enlaces entre el portafolio y la hoja imprimible */
    cvPage: 'CV en una hoja',
    cvPageTitle: 'Ver el CV completo en una sola página, listo para imprimir',
    portfolio: 'Portafolio',
    portfolioTitle: 'Volver al portafolio',
    /** Navegación por anclas de la barra superior */
    sections: {
      cases: 'Casos',
      stack: 'Stack',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
  },

  /* ---------------------------------------------------------------- *
   * Hero: qué problema resuelve, en la primera pantalla y sin rodeos.
   * ---------------------------------------------------------------- */
  hero: {
    headline: 'Me hago cargo del producto de punta a punta.',
    sub: 'Relevamiento con el cliente, modelado de datos, backend, frontend, infraestructura y soporte en producción. Hoy sostengo un ERP con 7 usuarios diarios y un sistema multiagente de IA que ya genera ventas reales.',
    what: 'Lo que me diferencia',
    differentiators: [
      'Un multiagente en producción con resultado de negocio medido, no un demo.',
      'Dueño de la infraestructura, no sólo del código: servidor propio configurado desde cero y CI/CD armado por mí.',
      'Referente técnico de un equipo de 3, con trato directo con el cliente.',
    ],
  },

  /** Llamados a la acción. Verbos, no sustantivos. */
  cta: {
    write: 'Escribime',
    writeTitle: 'Abrir el correo para escribirme',
    whatsapp: 'WhatsApp',
    whatsappTitle: 'Escribirme por WhatsApp',
    cv: 'Descargar CV',
    github: 'Ver GitHub',
    linkedin: 'Ver LinkedIn',
  },

  /** Franja de cifras del encabezado. Las claves son los ids de `proofMetrics`. */
  proof: {
    labels: {
      sales: 'más ventas minoristas',
      modules: 'módulos en producción',
      tests: 'tests automatizados',
      savings: 'de ahorro mensual de infra',
    },
    note: 'Cifras del ERP y del multiagente que sostengo hoy en NBG. Las expliqué una por una en los casos.',
  },

  identity: {
    role: 'Desarrollador Full Stack · Backend & DevOps',
    availability: 'Abierto a propuestas · remoto o Rosario',
    positioning:
      'Me hago cargo del producto de punta a punta: relevamiento con el cliente, modelado de datos, backend, frontend, infraestructura y soporte en producción. Hoy sostengo un ERP en producción y un sistema multiagente de IA que ya genera ventas reales.',
    photoAlt: 'Nicolás Raffagnini',
    copy: 'Copiar dirección de correo',
    copied: 'Copiado',
    whatsapp: 'WhatsApp',
  },

  stack: {
    title: 'Stack',
    note: 'Tecnologías con uso profesional en producción, defendibles en una entrevista técnica.',
    groups: [
      {
        label: 'Backend',
        items: ['Node.js 22 (ESM)', 'TypeScript', 'JavaScript', 'Express', 'APIs REST', 'Socket.IO', 'node-cron', 'Joi', 'Winston'],
      },
      {
        label: 'Datos',
        items: ['MySQL / MariaDB', 'MongoDB', 'Redis', 'Sequelize', 'Mongoose', 'Modelado ER', 'Transacciones y bloqueo de fila'],
      },
      {
        label: 'Frontend',
        items: ['React 18', 'Vite', 'React Router', 'Zustand', 'Tailwind CSS', 'Material UI', 'Radix UI', 'Recharts'],
      },
      {
        label: 'Seguridad',
        items: ['RBAC con catálogo declarativo', 'JWT en cookie httpOnly', 'CSRF por doble submit', 'Helmet', 'CORS con lista blanca', 'Rate limiting'],
      },
      {
        label: 'Testing',
        items: ['Mocha', 'Chai', 'Sinon', 'Supertest', 'Postman'],
      },
      {
        label: 'Infraestructura',
        items: ['Linux', 'Nginx', 'Docker', 'Docker Compose', 'GitHub Actions', 'GHCR', 'Google Cloud (Cloud Run)', 'Vercel', 'Render', 'rclone + systemd'],
      },
      {
        label: 'IA',
        items: ['Sistemas multiagente', 'API de Gemini', 'Embeddings y similitud coseno', 'Claude Code'],
      },
      {
        label: 'Proceso',
        items: ['SCRUM', 'Trello', 'Code review por PR', 'Convención de ramas y commits', 'Migraciones versionadas'],
      },
    ],
    declaredLabel: 'Conocimiento sin proyecto en producción',
    declared: ['PostgreSQL', 'Python'],
  },

  experience: {
    title: 'Experiencia',
    present: 'hoy',
    details: 'Detalle técnico',
    /** Una línea por trabajo para la timeline del portafolio. */
    oneLiners: {
      nbg: 'ERP en producción y sistema multiagente de ventas. Referente técnico de un equipo de 3.',
      wotech: 'Lideré 3 desarrolladores durante 12 meses bajo SCRUM: 8 módulos entregados en ~24 sprints.',
      nocountry: 'Coordiné 3 backend dentro de un equipo de 9 y desarrollé el algoritmo de scoring y matching del MVP.',
    },
    jobs: {
      nbg: {
        role: 'Desarrollador Full Stack · Backend · Frontend · DevOps',
        summary:
          'Dos líneas de trabajo en paralelo: el ERP de la empresa y el sistema multiagente de ventas. Docker en el día a día: entorno local en contenedores, build de la imagen en el pipeline y despliegue contenerizado en servidor propio.',
        projects: [
          {
            name: 'Sistema multiagente de ventas automatizadas',
            highlight: '+30% en ventas minoristas',
            summary:
              'Varios agentes coordinados entre sí automatizan el ciclo de venta minorista. TypeScript, API de Gemini para el razonamiento de los agentes, Redis para estado y colas, MySQL para persistencia.',
            details: [
              'Un seller-agent calcula con Gemini los embeddings de 768 dimensiones de cada producto; el ERP los usa para su búsqueda semántica. Es el punto de contacto entre los dos sistemas.',
              'Redis sostiene el estado de cada conversación y las colas entre agentes.',
              'El resultado se mide sobre la estadística de ventas de los últimos 3 meses. No es un demo: está en producción.',
              'Claude como asistente durante el desarrollo: prompts, refactors y documentación técnica.',
            ],
            stack: ['TypeScript', 'API de Gemini', 'Redis', 'MySQL', 'Docker'],
          },
          {
            name: 'WWSystem · ERP a medida para la industria de suplementos nutricionales',
            highlight: 'Referente técnico, equipo de 3',
            summary:
              'ERP full-stack y multi-rol que cubre la operación completa, de la compra de materia prima al cobro de la factura. En producción, con 7 usuarios diarios de ventas, planta, back office y dirección. Primera versión en menos de 6 meses; ~1.065 commits propios sobre ~2.500 (~42%).',
            details: [
              'Sistema RBAC completo: catálogo declarativo de permisos `<recurso>.<acción>.<scope>` como fuente única para el código y para el seed de migraciones, 7 roles, scopes de datos (own vs all) aplicados en los servicios, resolución por SQL con caché en memoria (invalidación explícita + TTL de 5 minutos) y un middleware genérico `requirePermission()`. El administrador no tiene bypass en código: recibe el comodín desde la base.',
              'Órdenes de compra de punta a punta: borrador → cotizada → emitida → facturada → recibida → conciliada, con ledger append-only de eventos, anulación por storno (nunca borrado), bandeja de diferencias de cantidad y un circuito de inconsistencias que separa tres permisos para tres responsables. Integrado transaccionalmente con stock, egresos y Libro de IVA.',
              'Circuito administrativo-contable: plan de cuentas jerárquico, egresos con dos ejes de estado (pago y documento), vencimientos y pagos parciales, egresos recurrentes por cron y cuenta corriente de proveedores.',
              'Libro de IVA y motor de desglose fiscal: base imponible despejada desde el importe total, con neto por diferencia para que la suma cierre exacta contra el total facturado.',
              'Cartera de valores financieros (cheques y e-cheques) como módulo transversal entre cobranzas y pagos: el mismo instrumento entra por un cobro y sale por un pago, con transiciones auditadas.',
              'Auditoría append-only con snapshot antes/después de ~20 entidades, delimitada frente a los ledgers de stock para no duplicar registro.',
              'Búsqueda semántica de productos con embeddings de 768 dimensiones y similitud coseno en memoria, con caché precalentado al arrancar; precio y stock nunca se embeben, se leen en vivo.',
              'Refactor arquitectónico del backend de estructura horizontal a features verticales autocontenidas —monolito modular de 33 módulos— con reglas de dependencia explícitas y ciclos resueltos por lazy loading.',
              'Transacciones con `SELECT ... FOR UPDATE` en toda operación que mueve stock o dinero, con una única compuerta que impide saldos negativos.',
              'Infraestructura: Docker multi-stage y Compose, GitHub Actions que publica imágenes en GHCR y despliega con runner self-hosted, dos entornos aislados (producción y testing) detrás de un gateway NGINX que termina TLS, backup diario a Google Drive con rclone + systemd y retención GFS (7 diarios / 4 semanales / 12 mensuales) con verificación de integridad del dump.',
              'Escala del sistema: ~158.000 líneas de código, 3 repositorios, 58 tablas, 221 migraciones versionadas, ~287 endpoints REST y ~1.059 tests automatizados.',
            ],
            stack: ['Node.js 22', 'Express 4', 'Sequelize', 'MySQL / MariaDB', 'React 18', 'Vite', 'Tailwind CSS', 'Socket.IO', 'Docker', 'GitHub Actions', 'Nginx'],
          },
        ],
      },
      wotech: {
        role: 'Líder Técnico y Desarrollador Full Stack',
        summary:
          'Lideré un equipo de 3 desarrolladores durante 12 meses, bajo SCRUM, en ~24 sprints de dos semanas. Sistema de gestión integral para una carpintería: 8 módulos entregados y 6 meses más de mantenimiento y administración del servidor.',
        details: [
          'Integré al cliente al proceso ágil: demo por sprint, validación continua y backlog ajustado a lo crítico del negocio. Era parte del ciclo, no el receptor del final.',
          'Módulos entregados: materia prima, proveedores, planos de muebles, y estimación de costos y tiempos, entre otros.',
          'Un año completo conduciendo el equipo y la relación con el cliente, no un sprint.',
        ],
        stack: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'React', 'Tailwind CSS', 'Vercel', 'Render'],
      },
      nocountry: {
        role: 'Desarrollador Backend y líder de equipo · práctica profesional',
        summary:
          'Práctica profesional de 10 meses en simulación laboral. Coordiné el equipo de backend —3 desarrolladores— dentro de un equipo multidisciplinario de 9 personas: 3 backend, 2 frontend, 2 diseñadores y 2 QA.',
        details: [
          'Desarrollé el algoritmo de scoring y matching, la funcionalidad central del MVP.',
          'Implementé los servicios con Node.js, Express, MongoDB, Mongoose y Socket.io; endpoints documentados y probados con Postman.',
          'Certificado de participación por la contribución técnica.',
        ],
        stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Socket.io', 'Postman'],
      },
    },
  },

  /* ---------------------------------------------------------------- *
   * Casos: los dos sistemas y las tres decisiones, todos con la misma
   * forma Situación → Qué hice → Resultado.
   * ---------------------------------------------------------------- */
  cases: {
    title: 'Casos',
    note: 'Cinco problemas reales: la situación, qué hice y con qué resultado. Las cifras son las del dossier, sin redondear.',
    decisionsTitle: 'Decisiones técnicas',
    decisionsNote: 'Tres problemas reales y qué hice con ellos.',
    situation: 'Situación',
    action: 'Qué hice',
    result: 'Resultado',
    items: {
      multiagente: {
        tag: 'IA en producción',
        title: 'Un sistema multiagente que vende solo',
        metricLabel: 'más ventas minoristas, medido sobre la estadística de los últimos 3 meses',
        situation:
          'El ciclo de venta minorista era manual: cada consulta la atendía una persona, de punta a punta.',
        action:
          'Diseñé una orquestación de varios agentes en TypeScript sobre la API de Gemini, con Redis para el estado de cada conversación y las colas entre agentes, y MySQL para la persistencia. Claude como asistente de desarrollo: prompts, refactors y documentación.',
        result:
          '~30% más de ventas minoristas en la estadística de los últimos 3 meses. No es un demo ni un proyecto de curso: está en producción.',
        details: [
          'Un seller-agent calcula con Gemini los embeddings de 768 dimensiones de cada producto; el ERP los usa para su búsqueda semántica. Es el punto de contacto entre los dos sistemas.',
          'Redis sostiene el estado de cada conversación y las colas entre agentes.',
          'Corre contenerizado en el mismo servidor propio que el ERP.',
        ],
      },
      erp: {
        tag: 'Producto de punta a punta',
        title: 'WWSystem · el ERP que reemplazó las planillas de una fábrica',
        metricLabel: 'módulos de negocio en producción, más 8 compartidos',
        situation:
          'Una fábrica de suplementos nutricionales manejaba su operación completa con planillas y procesos manuales, sin trazabilidad ni control de stock real.',
        action:
          'Construí un ERP full-stack y multi-rol que cubre de la compra de materia prima al cobro de la factura: modelado de datos, backend, frontend, infraestructura y soporte. Soy el referente técnico del proyecto en un equipo de 3 desarrolladores, con ~1.065 commits propios sobre ~2.500 (~42%).',
        result:
          'En producción con 7 usuarios diarios de ventas, planta, back office y dirección. Primera versión en menos de 6 meses. Hoy: ~158.000 líneas, 58 tablas, 221 migraciones versionadas, ~287 endpoints REST y ~1.059 tests automatizados.',
        details: [
          'Órdenes de compra de punta a punta: borrador → cotizada → emitida → facturada → recibida → conciliada, con ledger append-only de eventos y anulación por storno, nunca por borrado.',
          'Circuito administrativo-contable: plan de cuentas jerárquico, egresos con dos ejes de estado, vencimientos y pagos parciales, egresos recurrentes por cron y cuenta corriente de proveedores.',
          'Libro de IVA y motor de desglose fiscal: base imponible despejada desde el importe total, con neto por diferencia para que la suma cierre exacta contra el total facturado.',
          'Cartera de valores financieros (cheques y e-cheques) como módulo transversal entre cobranzas y pagos: el mismo instrumento entra por un cobro y sale por un pago, con transiciones auditadas.',
          'Auditoría append-only con snapshot antes/después de ~20 entidades, delimitada frente a los ledgers de stock para no duplicar registro.',
          'Búsqueda semántica de productos con embeddings de 768 dimensiones y similitud coseno en memoria, con caché precalentado al arrancar; precio y stock nunca se embeben, se leen en vivo.',
          'Refactor arquitectónico del backend de estructura horizontal a features verticales autocontenidas —monolito modular de 33 módulos— con reglas de dependencia explícitas y ciclos resueltos por lazy loading.',
          'Transacciones con `SELECT ... FOR UPDATE` en toda operación que mueve stock o dinero, con una única compuerta que impide saldos negativos.',
        ],
      },
      infra: {
        tag: 'Infraestructura',
        title: 'El costo de la nube contra siete usuarios internos',
        metricLabel: 'por mes de ahorro, con una inversión única de USD 650',
        situation:
          'El ERP corría en Google Cloud (Cloud Run + instancias de MySQL), elegido al principio por alta disponibilidad. El costo mensual pesaba sobre una operación chica.',
        action:
          'Evalué el gasto real contra el uso, propuse un servidor propio y lo configuré desde cero: sistema operativo, Nginx, Node.js, MySQL y contenedores Docker. Después armé el CI/CD con GitHub Actions.',
        result:
          'USD 150 por mes de ahorro con una inversión única de USD 650, amortizada en menos de 5 meses. El deploy pasó de ~10 minutos a 2:30 (−75%).',
        details: [
          'Dos entornos aislados —producción y testing— detrás de un gateway NGINX que termina TLS.',
          'GitHub Actions publica las imágenes en GHCR y despliega con un runner self-hosted.',
          'Backup diario a Google Drive con rclone + systemd, retención GFS (7 diarios / 4 semanales / 12 mensuales) y verificación de integridad del dump.',
          'El trade-off es explícito: se aceptó menos alta disponibilidad para una operación de 7 usuarios internos.',
        ],
      },
      rbac: {
        tag: 'Seguridad',
        title: 'Autorización hardcodeada en ~287 endpoints',
        metricLabel: 'endpoints REST, con la autorización declarada en un solo lugar',
        situation:
          'La autorización estaba escrita a mano por rol, con middlewares del tipo `xOrAdmin` repartidos por las rutas. Cada rol nuevo o cada excepción implicaba tocar código en varios lugares.',
        action:
          'Diseñé un catálogo declarativo de permisos como fuente única para el código y para el seed de las migraciones, un middleware genérico `requirePermission()`, resolución por SQL con caché (invalidación explícita al editar roles, más un TTL de 5 minutos como red) y scopes de datos aplicados dentro de los servicios.',
        result:
          'Un solo lugar donde se declara quién puede qué, con un test automatizado que valida la coherencia del catálogo. Saqué el bypass del administrador del código: el admin recibe el comodín desde la base, así toda la autorización pasa por el mismo flujo.',
        details: [
          'El catálogo usa la forma `<recurso>.<acción>.<scope>` y alimenta tanto al código como al seed de las migraciones: no hay dos verdades.',
          '7 roles, con scopes de datos (`own` vs `all`) aplicados dentro de los servicios, no en las rutas.',
          'La invalidación explícita cubre el caso normal; el TTL de 5 minutos es la red por si un nodo se pierde un evento.',
        ],
      },
      recepcion: {
        tag: 'Modelado de dominio',
        title: 'Tres permisos para un mismo hecho',
        metricLabel: 'permisos deliberadamente separados para tres responsables distintos',
        situation:
          'En la recepción de mercadería, el operario de planta ve la mercadería observada, pero quien decide si se acepta con desvío o se devuelve es el back office.',
        action:
          'Separé tres permisos deliberadamente distintos: planta reporta, back office decide y planta confirma el ingreso a stock, con el evento registrado en un ledger append-only.',
        result:
          'El circuito refleja la responsabilidad real de cada sector. Un solo permiso le habría dado a planta la potestad de aceptar mercadería vencida contra el stock.',
        details: [
          'El ledger append-only deja el hecho registrado con su responsable: quién reportó, quién decidió y quién confirmó.',
          'El circuito está integrado transaccionalmente con stock, egresos y Libro de IVA.',
        ],
      },
    },
  },

  testimonials: {
    title: 'Referencias',
    note: 'Lo que dicen quienes trabajaron conmigo.',
  },

  education: {
    title: 'Formación',
    items: {
      tecnicatura: 'Técnico Superior en Desarrollo de Software',
      coursera: 'Generative AI Software Engineering Specialization',
      microsoft: 'Desarrollo de sistemas de IA agéntica',
      coderhouse: 'Desarrollo Backend Node.js · Desarrollo Frontend React',
    },
    languagesTitle: 'Idiomas',
    languages: [
      'Español — nativo',
      'Inglés — B1. Leo documentación técnica y escribo en inglés; conversación fluida, todavía no.',
    ],
  },

  contact: {
    title: 'Contacto',
    lead: 'Si estás buscando a alguien que se haga cargo del backend y también de lo que pasa después del deploy, escribime.',
    updated: 'Última actualización: agosto de 2026',
    builtWith: 'Página estática hecha con Astro y Tailwind CSS.',
  },

  /** Rótulos de los diagramas. Cada uno va en el <title>/<desc> del SVG. */
  diagrams: {
    agents: {
      title: 'Flujo del sistema multiagente',
      desc: 'El cliente entra por el canal de venta, el orquestador reparte el trabajo entre los agentes, los agentes razonan contra la API de Gemini, Redis sostiene el estado y las colas, MySQL persiste, y el seller-agent le pasa al ERP los embeddings de 768 dimensiones que alimentan su búsqueda semántica.',
      nodes: {
        client: 'Cliente',
        orchestrator: 'Orquestador',
        agents: 'Agentes coordinados',
        seller: 'seller-agent',
        others: 'otros agentes',
        gemini: 'API de Gemini',
        redis: 'Redis',
        redisNote: 'estado + colas',
        mysql: 'MySQL',
        mysqlNote: 'persistencia',
        erp: 'ERP',
        erpNote: 'búsqueda semántica',
        embeddings: 'embeddings 768d',
      },
    },
    purchaseOrder: {
      title: 'Circuito de la orden de compra',
      desc: 'La orden de compra recorre seis estados, de borrador a conciliada. Cada transición queda escrita en un ledger append-only, y una orden nunca se borra: se anula por storno.',
      states: ['Borrador', 'Cotizada', 'Emitida', 'Facturada', 'Recibida', 'Conciliada'],
      ledger: 'Ledger append-only de eventos',
      storno: 'Anulación por storno · nunca borrado',
    },
    infra: {
      title: 'Pipeline e infraestructura',
      desc: 'Un push dispara GitHub Actions, que publica la imagen en GHCR; un runner self-hosted la despliega en el servidor propio, detrás de un gateway NGINX que termina TLS sobre dos entornos aislados. Un backup diario con rclone y systemd sube a Google Drive con retención GFS.',
      nodes: {
        push: 'push',
        actions: 'GitHub Actions',
        ghcr: 'GHCR',
        runner: 'Runner self-hosted',
        nginx: 'Gateway NGINX',
        nginxNote: 'termina TLS',
        prod: 'Producción',
        test: 'Testing',
        backup: 'rclone + systemd',
        drive: 'Google Drive',
        gfs: 'GFS 7 / 4 / 12',
        deploy: 'deploy 2:30',
      },
    },
  },
};

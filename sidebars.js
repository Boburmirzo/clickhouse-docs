/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      collapsible: false,
      items: [
        'en/intro',
        'en/quick-start',
        'en/tutorial',
        'en/getting-started/install',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      className: 'top-nav-item',
      collapsed: false,
      collapsible: false,
      items: [
        'en/concepts/why-clickhouse-is-so-fast',
        'en/concepts/olap',
        'en/about-us/distinctive-features',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      collapsible: false,
      items: [
        'en/guides/creating-tables',
        'en/guides/inserting-data',
        'en/guides/writing-queries',
        'en/guides/developer/mutations',
        'en/guides/joining-tables',
        {
          type: 'category',
          label: 'Advanced Guides',
          collapsed: true,
          collapsible: true,
          items: [
            'en/guides/developer/cascading-materialized-views',
            'en/guides/developer/ttl',
            'en/guides/developer/deduplication',
            'en/sql-reference/dictionaries/index',
            'en/guides/developer/lightweight-delete',
            'en/sql-reference/transactions',
            'en/guides/developer/alternative-query-languages',
          ],
        },
        {
          type: 'category',
          label: 'Best Practices',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/guides/best-practices',
            },
          ],
        },
        {
          type: 'category',
          label: 'Example Datasets',
          collapsed: true,
          collapsible: true,
          items: [
            'en/getting-started/index',
            {
              type: 'autogenerated',
              dirName: 'en/getting-started/example-datasets',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      link: {
          type: 'doc',
          id: 'en/integrations/index',
      },
      collapsed: false,
      collapsible: false,
      items: [
        'en/integrations/data-ingestion/s3/index',
        'en/integrations/data-ingestion/gcs/index',
        'en/integrations/data-ingestion/clickpipes/index',
        'en/integrations/data-ingestion/dbms/jdbc-with-clickhouse',
        'en/integrations/data-ingestion/dbms/odbc-with-clickhouse',
        'en/integrations/data-ingestion/dbms/postgresql/index',
        'en/integrations/data-ingestion/dbms/mysql/index',
        'en/integrations/data-ingestion/kafka/index',
        'en/integrations/data-ingestion/etl-tools/dbt/index',
        'en/integrations/data-ingestion/insert-local-files',
        'en/integrations/data-ingestion/redshift/index',
        {
          type: 'category',
          label: 'More...',
          className: 'top-nav-item',
          collapsed: true,
          collapsible: true,
          items: [
            'en/integrations/data-ingestion/etl-tools/airbyte-and-clickhouse',
            'en/integrations/data-ingestion/msk/index',
            'en/integrations/data-ingestion/emqx/index',
            {
              type: 'link',
              label: 'Cassandra',
              href: '/en/sql-reference/dictionaries#cassandra',
            },
            'en/sql-reference/table-functions/deltalake',
            'en/engines/table-engines/integrations/embedded-rocksdb',
            'en/engines/table-engines/integrations/hive',
            'en/engines/table-engines/integrations/hudi',
            'en/engines/table-engines/integrations/iceberg',
            'en/integrations/data-ingestion/s3-minio',
            'en/engines/table-engines/integrations/mongodb',
            'en/engines/table-engines/integrations/nats',
            'en/integrations/data-ingestion/etl-tools/nifi-and-clickhouse',
            'en/engines/table-engines/integrations/rabbitmq',
            {
              type: 'link',
              label: 'Redis',
              href: '/en/sql-reference/dictionaries#redis',
            },
            'en/engines/table-engines/integrations/sqlite',
            'en/integrations/data-ingestion/etl-tools/vector-to-clickhouse',
            'en/integrations/deployment/easypanel/index',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Data Formats',
      link: {
          type: 'doc',
          id: 'en/integrations/data-ingestion/data-formats/intro',
        },
      collapsed: false,
      collapsible: false,
      items: [
        'en/integrations/data-ingestion/data-formats/binary',
        'en/integrations/data-ingestion/data-formats/csv-tsv',
        'en/integrations/data-ingestion/data-formats/json',
        'en/integrations/data-ingestion/data-formats/parquet',
        'en/integrations/data-ingestion/data-formats/sql',
        'en/integrations/data-ingestion/data-formats/arrow-avro-orc',
        'en/integrations/data-ingestion/data-formats/templates-regex',
        {
          type: 'doc',
          id: 'en/interfaces/formats',
          label: 'View all formats...',
        },
      ],
    },
    {
      type: 'category',
      label: 'Clients and Drivers',
      collapsed: false,
      collapsible: false,
      items: [
        'en/integrations/clickhouse-client-local',
        'en/integrations/cli',
        'en/operations/utilities/clickhouse-local',
        'en/integrations/sql-clients/sql-console',
        'en/getting-started/playground',
        'en/integrations/language-clients/js',
        'en/integrations/language-clients/java/index',
        'en/integrations/language-clients/python/index',
        {
          type: 'category',
          label: 'View all languages',
          collapsed: true,
          collapsible: true,
          items: [
            'en/integrations/language-clients/js',
            'en/integrations/language-clients/java/index',
            'en/integrations/language-clients/go/index',
            'en/integrations/language-clients/python/index',
          ],
        },
        {
          type: 'category',
          label: 'Drivers and Interfaces',
          collapsed: true,
          collapsible: true,
          items: [
            'en/interfaces/overview',
            'en/interfaces/cli',
            'en/interfaces/cpp',
            'en/interfaces/http',
            'en/interfaces/tcp',
            'en/interfaces/jdbc',
            'en/interfaces/mysql',
            'en/interfaces/odbc',
            'en/interfaces/postgresql',
            'en/interfaces/schema-inference',
            'en/interfaces/grpc',
            {
              type: 'category',
              label: 'Third-party Interfaces',
              collapsed: true,
              collapsible: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'en/interfaces/third-party',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'SQL Clients',
          collapsed: true,
          collapsible: true,
          items: [
            'en/integrations/sql-clients/datagrip',
            'en/integrations/sql-clients/dbeaver',
            'en/integrations/sql-clients/dbvisualizer',
            'en/integrations/sql-clients/jupysql',
            'en/integrations/sql-clients/tablum',
          ],
        },
        {
          type: 'category',
          label: 'Business Intelligence',
          collapsed: true,
          collapsible: true,
          items: [
            'en/integrations/data-visualization',
            'en/integrations/data-visualization/deepnote',
            'en/integrations/data-visualization/explo-and-clickhouse',
            'en/integrations/data-visualization/grafana-and-clickhouse',
            'en/integrations/data-visualization/looker-studio-and-clickhouse',
            'en/integrations/data-visualization/metabase-and-clickhouse',
            'en/integrations/data-visualization/powerbi-and-clickhouse',
            'en/integrations/data-visualization/rocketbi-and-clickhouse',
            'en/integrations/data-visualization/superset-and-clickhouse',
            'en/integrations/data-visualization/tableau-and-clickhouse',
            'en/integrations/data-visualization/zingdata-and-clickhouse',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Managing ClickHouse',
      collapsed: false,
      collapsible: false,
      items: [
        'en/guides/sre/user-management/index',
        'en/operations/backup',
        'en/operations/monitoring',
        {
          type: 'category',
          label: 'Deploying',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/deployment-guides',
            },
          ],
        },
        {
          type: 'category',
          label: 'Security',
          collapsed: true,
          collapsible: true,
          items: [
            'en/guides/sre/user-management/configuring-ldap',
            'en/guides/sre/user-management/ssl-user-auth',
            'en/operations/named-collections',
            'en/guides/sre/configuring-ssl',
            'en/guides/sre/network-ports',
            'en/operations/ssl-zookeeper',
            {
              type: 'category',
              label: 'External Authentication',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'en/operations/external-authenticators',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          collapsed: true,
          collapsible: true,
          label: 'Advanced Settings',
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/operations/settings',
            },
            'en/operations/configuration-files',
            'en/operations/server-configuration-parameters/settings',
          ],
        },
        {
          type: 'category',
          collapsed: true,
          collapsible: true,
          label: 'Performance and Optimizations',
          items: [
            'en/guides/sre/scaling-clusters',
            'en/operations/caches',
            'en/operations/query-cache',
            'en/operations/quotas',
            'en/operations/optimizing-performance/sampling-query-profiler',
            'en/operations/performance-test',
          ],
        },
        {
          type: 'category',
          collapsed: true,
          collapsible: true,
          label: 'Tools and Utilities',
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/operations/utilities',
            },
          ],
        },
        {
          type: 'category',
          collapsed: true,
          collapsible: true,
          label: 'More...',
          items: [
            'en/operations/update',
            'en/operations/named-collections',
            'en/operations/storing-data',
            'en/guides/sre/keeper/index',
            'en/guides/sre/configuring-ssl',
            'en/operations/opentelemetry',
            {
              type: 'category',
              collapsed: true,
              collapsible: true,
              label: 'System Tables',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'en/operations/system-tables',
                },
              ],
            },
            'en/operations/tips',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'About ClickHouse',
      link: {
          type: 'doc',
          id: 'en/about-us/intro',
      },
      collapsed: false,
      collapsible: false,
      items: [
        'en/about-us/adopters',
        'en/about-us/support',
        'en/about-us/cloud',
        {
          type: 'autogenerated',
          dirName: 'en/whats-new',
        },
        {
          type: 'category',
          label: 'Contribute',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/development',
            },
            {
              type: 'category',
              label: 'Native Protocol',
              collapsed: true,
              collapsible: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'en/native-protocol',
                },
              ],
            },
          ],
        },
        'en/about-us/history',
      ],
    },
  ],

  cloud: [
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      collapsible: false,
      className: 'top-nav-item',
      items: [
        'en/cloud-index',
        {
          type: 'doc',
          id: 'en/get-started/cloud-quick-start',
        },
        'en/get-started/sql-console',
        'en/cloud/marketplace',
        'en/cloud/support',
      ],
    },
    {
      type: 'category',
      label: 'Managing Cloud',
      collapsed: false,
      collapsible: false,
      className: 'top-nav-item',
      items: [
        'en/cloud/manage/backups',
        'en/cloud/manage/billing',
        'en/cloud/manage/settings',
        'en/cloud/manage/scaling',
        'en/cloud/manage/cmek',
        'en/cloud/manage/service-uptime',
        'en/cloud/manage/upgrades',
        'en/cloud/manage/account-close',
      ],
    },
    {
      type: 'category',
      label: 'Cloud API',
      link: {
          type: 'doc',
          id: 'en/cloud/manage/api/api-overview',
          },
      collapsed: false,
      collapsible: false,
      className: 'top-nav-item',
      items: [
        'en/cloud/manage/openapi',
        'en/cloud/security/cloud-endpoints-api',
        {
          type: 'category',
          label: 'API Reference',
          items: [
            'en/cloud/manage/api/invitations-api-reference',
            'en/cloud/manage/api/keys-api-reference',
            'en/cloud/manage/api/members-api-reference',
            'en/cloud/manage/api/organizations-api-reference',
            'en/cloud/manage/api/services-api-reference',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Cloud Reference ',
      collapsed: false,
      collapsible: false,
      className: 'top-nav-item',
      items: [
        'en/cloud/reference/architecture',
        'en/cloud/reference/changelog',
        'en/cloud/reference/cloud-compatibility',
        'en/cloud/reference/supported-regions',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices ',
      collapsed: false,
      collapsible: false,
      className: 'top-nav-item',
      items: [
        'en/cloud/bestpractices/bulkinserts',
        'en/cloud/bestpractices/asyncinserts',
        'en/cloud/bestpractices/avoidmutations',
        'en/cloud/bestpractices/avoidnullablecolumns',
        'en/cloud/bestpractices/avoidoptimizefinal',
        'en/cloud/bestpractices/partitioningkey',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      collapsed: false,
      collapsible: false,
      className: 'top-nav-item',
      items: [
        'en/cloud/manage/users-and-roles',
        'en/cloud/security/security-companion-guide',
        'en/cloud/security/ip-access-list',
        'en/cloud/security/aws-privatelink',
        'en/cloud/security/gcp-private-service-connect',
        'en/cloud/security/activity-log',
        'en/cloud/security/secure-s3',
      ],
    },
    {
      type: 'category',
      label: 'Migrating to Cloud',
      collapsed: false,
      collapsible: false,
      items: [
        'en/integrations/migration/index',
        'en/integrations/migration/clickhouse-to-cloud',
        'en/integrations/migration/clickhouse-local-etl',
        'en/integrations/migration/etl-tool-to-clickhouse',
        'en/integrations/migration/object-storage-to-clickhouse',
      ],
    },
  ],

  sqlreference: [
    {
      type: 'category',
      label: 'Introduction',
      className: 'top-nav-item',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'en/sql-reference/index',
        },
        {
          type: 'doc',
          id: 'en/sql-reference/syntax',
        },
        {
          type: 'doc',
          id: 'en/sql-reference/formats',
        },
        {
          type: 'doc',
          id: 'en/sql-reference/ansi',
        },
        {
          type: 'category',
          label: 'Data Types',
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/sql-reference/data-types',
            },
          ],
        },
        {
          type: 'category',
          label: 'Statements',
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/sql-reference/statements',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Engines',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/engines',
        },
      ],
    },
    {
      type: 'category',
      label: 'Functions',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Regular Functions',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/sql-reference/functions',
            },
          ],
        },
        {
          type: 'category',
          label: 'Aggregate Functions',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/sql-reference/aggregate-functions',
            },
          ],
        },
        {
          type: 'category',
          label: 'Table Functions',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/sql-reference/table-functions',
            },
          ],
        },
        {
          type: 'doc',
          id: 'en/sql-reference/window-functions/index',
        },
      ],
    },
    {
      type: 'category',
      label: 'Other Features',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/sql-reference/operators',
        },
        {
          type: 'doc',
          id: 'en/sql-reference/distributed-ddl',
        },
      ],
    },
  ],

  russia: [
    {
      type: 'autogenerated',
      dirName: 'ru',
    },
  ],
  chinese: [
    {
      type: 'autogenerated',
      dirName: 'zh',
    },
  ],
};

module.exports = sidebars;

fx_version "cerulean"

games { "gta5" }

author 'Aspect'
description "OneCity Boilerplate"

version "0.1.0"

ui_page 'web/dist/index.html'

files {
    "web/dist/**/*",
    "web/dist/assets/*.woff",
    "web/dist/assets/*.woff2",
    "web/dist/assets/*.png",
}
server_script "@oxmysql/lib/MySQL.lua"
client_script "@PolyZone/client.lua"

client_scripts {
  '@qb-lib/client/cl_interface.lua',
  '@qb-errorlog/client/cl_errorlog.lua',
  "@qb-sync/client/lib.lua",
  '@qb-lib/client/cl_rpc.lua',
  "@qb-lib/client/cl_rpc.js",
  '@qb-lib/client/cl_ui.lua',
  '@qb-lib/client/cl_ui.js',
  '*.lua',
  'client/*.js',
}

shared_script {
  '@qb-lib/shared/sh_cacheable.js',
  "@dpx/shared/lib.lua",
  '@qb-lib/shared/sh_util.lua',
}

server_scripts {
    '@qb-lib/server/sv_asyncExports.js',
    "@qb-lib/server/sv_npx.js",
    "@qb-lib/server/sv_rpc.js",
    '@qb-lib/server/sv_character.js',
  '@qb-lib/server/sv_rpc.lua',
 
  '*.lua',
  'server/*.js'
}



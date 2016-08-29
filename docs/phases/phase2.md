# Phase 2: Hosts Model, API, and basic APIUtil

## Rails
### Models
* Host

### Controllers
* Api::HostsController (create, destroy, index, show, update)

### Views
* hosts/index.json.jbuilder
* hosts/show.json.jbuilder

## Redux
### Views (React Components)
* HostIndex
  - HostIndexItem
* HostDetail

### Stores
* Hosts

### Actions
* ApiActions.receiveAllHosts -> triggered by ApiUtil
* ApiActions.receiveSingleHost
* ApiActions.removeHost
* HostActions.fetchAllHosts -> triggers ApiUtil
* HostActions.fetchSingleHost
* HostActions.createHost
* HostActions.editHost
* HostActions.destroyHost

### ApiUtil
* ApiUtil.fetchAllHosts
* ApiUtil.fetchSingleHost
* ApiUtil.createHost
* ApiUtil.editHost
* ApiUtil.destroyHost


## Gems/Libraries

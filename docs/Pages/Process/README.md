<a name="Process"></a>

## Process
The Component that handles the display/tabbing between Compass and AnalyticsPage
holds all the logic in retrieving the process according to proces id stored in the url

**Kind**: global class

* [Process](#Process)
    * [.getProcessItems](#Process+getProcessItems)
    * [.updateHandler](#Process+updateHandler)

<a name="Process+getProcessItems"></a>

### process.getProcessItems
**Kind**: instance property of [<code>Process</code>](#Process)

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | of the process makes an api request to retrieve all of the data of the process from the process ID once the data is retrieved, change the state of the component |

<a name="Process+updateHandler"></a>

### process.updateHandler
**Kind**: instance property of [<code>Process</code>](#Process)

| Param | Type | Description |
| --- | --- | --- |
| either | <code>string</code> | "Compass" or "Graph", the components to refresh  change the state of the component to refresh, when the person chooses a tab, the child component will make a new request to the api for the latest data |
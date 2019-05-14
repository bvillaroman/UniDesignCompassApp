<a name="Dashboard"></a>

## Dashboard
The page that handles the display of all user created processes
holds all the logic in retrieving the processes according tot he logged in user

**Kind**: global class

* [Dashboard](#Dashboard)
    * [.getProcesses](#Dashboard+getProcesses)
    * [.selectProcess](#Dashboard+selectProcess)
    * [.viewHandler](#Dashboard+viewHandler)
    * [.componentDidMount()](#Dashboard+componentDidMount)

<a name="Dashboard+getProcesses"></a>

### dashboard.getProcesses
**Kind**: instance property of [<code>Dashboard</code>](#Dashboard)

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | user id  make the api call with the user id to get all the processes when the data is fetched, change the state to show the processes, if it isnt, then return an error message to the page |

<a name="Dashboard+selectProcess"></a>

### dashboard.selectProcess
**Kind**: instance property of [<code>Dashboard</code>](#Dashboard)

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | current Process select the current process that was clicked |

<a name="Dashboard+viewHandler"></a>

### dashboard.viewHandler
handle the view of the page
if there is no selected process, show the feed, otherwise show the compass if the selected process

**Kind**: instance property of [<code>Dashboard</code>](#Dashboard)
<a name="Dashboard+componentDidMount"></a>

### dashboard.componentDidMount()
make the api calls with the user id, if ther eis no userId then show nothing

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)
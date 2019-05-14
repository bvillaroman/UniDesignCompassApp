## Classes

<dl>
<dt><a href="#SubmitCompass">SubmitCompass</a></dt>
<dd><p>SubmitCompass
Form that handles submission of the design process
takes in the title of the desired compass and fires the createCompass handler</p>
</dd>
<dt><a href="#ChooseStructure">ChooseStructure</a></dt>
<dd><p>Choose Structure
Form that handles Structure of the design process
prompts the user to either pick the default structure or a custom structure</p>
</dd>
<dt><a href="#PhaseNumber">PhaseNumber</a></dt>
<dd><p>PhaseNumber
Form that handles Structure of the design process
prompts the user to choose the number phases they want in their process</p>
</dd>
<dt><a href="#DescribePhase">DescribePhase</a></dt>
<dd><p>Form that handles creation of a phase in their design process
prompts the user to name their phase and it&#39;s description</p>
</dd>
<dt><a href="#CreatePage">CreatePage</a></dt>
<dd><p>The page that handles creation of a a design process
holds all the logic in changing and storing the form data, then submits the data to the server</p>
</dd>
</dl>

<a name="SubmitCompass"></a>

## SubmitCompass
SubmitCompass
Form that handles submission of the design process
takes in the title of the desired compass and fires the createCompass handler

**Kind**: global class
<a name="ChooseStructure"></a>

## ChooseStructure
Choose Structure
Form that handles Structure of the design process
prompts the user to either pick the default structure or a custom structure

**Kind**: global class
<a name="PhaseNumber"></a>

## PhaseNumber
PhaseNumber
Form that handles Structure of the design process
prompts the user to choose the number phases they want in their process

**Kind**: global class
<a name="DescribePhase"></a>

## DescribePhase
Form that handles creation of a phase in their design process
prompts the user to name their phase and it's description

**Kind**: global class
<a name="CreatePage"></a>

## CreatePage
The page that handles creation of a a design process
holds all the logic in changing and storing the form data, then submits the data to the server

**Kind**: global class

* [CreatePage](#CreatePage)
    * [.handleCompassTitle](#CreatePage+handleCompassTitle)
    * [.handleCompassType](#CreatePage+handleCompassType)
    * [.handlePhaseAmount](#CreatePage+handlePhaseAmount)
    * [.createPhase](#CreatePage+createPhase)
    * [.createCompass](#CreatePage+createCompass)
    * [.submitPhases](#CreatePage+submitPhases)
    * [.handleForms](#CreatePage+handleForms)

<a name="CreatePage+handleCompassTitle"></a>

### createPage.handleCompassTitle
event handler for the Process title
changes the value of this.state.compassTitle

**Kind**: instance property of [<code>CreatePage</code>](#CreatePage)

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Object</code> | object that holds the value of the Process Title |

<a name="CreatePage+handleCompassType"></a>

### createPage.handleCompassType
event handler for the Process Structure
changes the value of this.state.defaultCompass
when the user submits the structure, switch to the submitCompass form

**Kind**: instance property of [<code>CreatePage</code>](#CreatePage)

| Param | Type | Description |
| --- | --- | --- |
| boolean | <code>bool</code> | that holds the structure type of our Process (true === default structure, false === custom structure) |

<a name="CreatePage+handlePhaseAmount"></a>

### createPage.handlePhaseAmount
event handler for the Phase amount
changes the value of this.state.phaseAmount
when the user submits the number of phases, switch to the createPhases form

**Kind**: instance property of [<code>CreatePage</code>](#CreatePage)

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Object</code> | object that holds the value of the Phase Amount |

<a name="CreatePage+createPhase"></a>

### createPage.createPhase
event handler that creates the phases
changes the value of this.state.phases with an array of phases with their title and descriptions

**Kind**: instance property of [<code>CreatePage</code>](#CreatePage)

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Object</code> | object that holds the Phase objects |

<a name="CreatePage+createCompass"></a>

### createPage.createCompass
makes the api request to submit a new compass with: Process Title and the defined phases in the Process
if the server request is succesful, the user is redirected to the process screen
otherwise, there was an error

**Kind**: instance property of [<code>CreatePage</code>](#CreatePage)
<a name="CreatePage+submitPhases"></a>

### createPage.submitPhases
when the user is done with all the phases, change the form to the submitCompass Form

**Kind**: instance property of [<code>CreatePage</code>](#CreatePage)
<a name="CreatePage+handleForms"></a>

### createPage.handleForms
handles the displaying of forms for the user to operate with to create their design process

**Kind**: instance property of [<code>CreatePage</code>](#CreatePage)
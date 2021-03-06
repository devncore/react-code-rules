directory

```
source
  - build
  - public
  - src
    - apps
    - components
    - design
    - pages
    index.css
    index.js
    setupProxy.js
    react-app-env.d.ts
.env.development
.env.production
.env.test
localhost.pem
localhost-key-pem
tsconfig.json
```

apps
```
views
  PortalApp
  PortalHome
  PortalMenuBar
  PortalNavBar
  PortalSitemap
components
  AccountButton
  AppTitleTypo
  MailButton
  MenuButton
  NavTreeItem
  NavTreeView
  NotificationButton
  SiteTreeItem
  SiteTreeView
  SvgCloseSquareIcon
  SvgMinusSqureIcon
  SvgNewTabIcon
  SvgPlusSqaureIcon
  TopMenuBox
```

input

```
AddBtn
DatePicker
DateTimePicker
Select
switch
Text
TextSearch
TextWithBtn
ClosedBtn
DeleteBtn
ExitBtn
ModifyBtn
saveBtn
SearchBtn
```

layout

```
LayoutLeft
LayoutRight
ModalBottomBar
ModalTitleBar
PageTitle
SearchHeader
```

markdown
> markdownviewer
```
import MDEditor from "@uiw/react-md-editor";
import { styled } from "@mui/material/styles";
import "design/markdown.css";

const MDBox = styled(Paper)({
    padding: "20px",
    margin: "20px",
    borderRadius: "0px",
    maxWidth: "800px"
});

export default function MarkdownViewer(props) {
    const { pageName } props;
    const [post, setPost] = React.useState("");
    
    fetch(process.env.PUBLIC_URL + `/docs/${pageName}.md`)
        .then(r => r.text())
        .then(text => setPost(text));

    return (
        <MDBox variant="outlined">
            <Grid container>
                <Grid item xs>
                    <MDEditor.Markdown source={post}/>
                </Grid>
            </Grid>
         </MDBox>
    ); 
}
```

window

```
Modal
Pager
```

design

```
dashboard.css
default.css
markdown.css
portal.css
```

responsive exam
> App.js
```
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        minHeight: "100vh",
        zIndex: 1,
        position: "relative",
        overflow: "scroll",
        backgroundColor: "#cccccc"
    },
    top: {
        zIndex: 100,
        width: "100%",
        backgroundColor: "#aaaaaa",
        top: 0,
        height: "40px",
        position: "fixed"
    },
    left: {
        width: "210px",
        position: "fixed",
        backgroundColor: "#eeeeee",
        padding: "60px 20px 60px 20px"   
    },
    footer: {
        position: "fixed",
        bottom: 0,
        backgroundColor: "#cccccc",
        height: "40px",
        lineHeight: "40px",
        width: "100%"
    }
}));

function App(props) {
    const classes = useStyles();
    
    return (
        <div>
            <div className={classes.top}>
                Top
            </div>
            <div>
                <div className={classes.left}>
                    <div>Left</div>
                    <div>Menu1</div>
                    <div>Menu1</div>
                    <div>Menu1</div>
                    <div>Menu1</div>
                </div>
                <div className={classes.content}>
                    <DataGrid/>
                    <Footer className={classes.footer}/>
                </div>
            </div>
        </div>
    );
}

```

exam-datagrid

```
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const rowData = [
    { make: "Tesla", model: "Model 3", price: 35000 },
    { make: "Thinkpad", model: "X1 Carbon", price: 2900 },
    { make: "Apple", model: "Macbook 16 Pro Max", price: 3800 },
    { make: "Tesla", model: "Model 3", price: 35000 },
    { make: "Tesla", model: "Model 3", price: 35000 },

];

const createRow = (item) => {
    return <div>{item.name} {item.post} {item.addr}</div>
}

export default function DataGrid(props) {
    return (
        <div className="ag-theme-alpine"
            style={{height: "calc(100vh - 120px)", width: "100%"}}>
            <AgGridReact rowData={rowData}>
                <AgGridColumn field="make"/>
                <AgGridColumn field="model"/>
                <AgGridColumn field="price"/>
            </AgGridReact>
        </div>              
    );
}
```

examp-footer

```
import React from "react";

export default function Footer(props) {
    reutn (
        <div {...props}>
            james exam footer area
        </div>
    );
}
```

exam-design-default.css
```
html, body {
}

.content {
    overflow-y: scroll;
    margin: 0 auto;
    padding: 0 auto;
    height: 100%;
}
```

aspnetcore controllers
```
[Route("api/exam")]
[ApiController]
public class ExamController : ControllerBase
{
    [HttpGet("getTimes")]
    public string GetTimes()
    {
        return "2021-06-08";
    }

    [HttpGet("getUserInfo")]
    public UserInfo GetUserInfo(string id)
    {
        return context.Users.Find(id).FirstOrDefault();
    }

    [HttpGet("{id}/users")]
    public UserInfo Users(string id)
    {
        return context.Users.Find(id).FirstOrDefault();
    }

    [HttpPost("completed")]
    public ActionResult Completed()
    {
        string data = Request.From["Data"].ToString();
        if(Validation.isValid(data)) 
        {
            return Redirect("/");
        }
        return Ok(o);
    }

    [HttpPost]
    public UserInfo Post([FromBody] ReqInfo info)
    {
        return context.Users.Find(info.Id).FirstOrDefault();
    }

    [HttpGet]
    public UserInfo Get()
    {
        return context.Users.ToList();
    }
   
    [HttpPut("{id}")]
    public UserInfo Put(string id, [FromBody] IEnumerable<UserInfo> items)
    {
        return ContextAdapter.Update(id, items); 
    }

    [HttpDelete("{id}")]
    public UserInfo Delete(string id)
    {
        return ContextAdapter.Delete(id); 
    }
}
```

AspNetCore-AddConfigure

```
public Startup(IConfiguration configuration)
{
    Configuration = configuration;
}

public IConfiguration Configuration { get; }

public void ConfigureServices(IServiceCollection services)
{
    services.Configure<DbInfo>(Configuration.GetSection("DbInfos"));
    services.Configure<JWTInfo>(Configuration.GetSection("JWTInfos"));
}

// using configures
public class ExamController
{
    private DbInfo _dbInfo;
    private JwtInfo _jwtInfo;
    public ExamController(IOption<DbInfo> dbInfo, IObtions<JWTInfo> jwtInfos)
    {
        _dbInfo = dbInfo;
        _jwtInfo = jwtInfo;
    }
}
```

AspNetCore-ConfigureServices
> cors
```
readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

services.AddCors(options => {
    options.AddPolicy(name: MyAllowSpecificOrigins,
    builder => builder.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod());
});

app.UseCors(MyAllowSpecificOrigins);
```

> AddControllers
```
services.AddControllers();
```

> Authentication.JWT
```
var key = Encoding.ASCII.GetBytes(_secret);
services.AddAuthentication(x =>
{
    x.DefaultAutenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
    .AddJwtBearer(x => 
    {
        x.RequireHttpMetadata = false;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuerSigningKey = false,
            ValidateAudience = false;
        }
    }
);
```

// Session
```
services.AddDistributeMemoryCache();
services.AddSession(options => 
{
    options.Cookie.Name = ".devncore.session";
    options.IdleTimeout = TimeSpan.FromMinutes(Settings.EXPIRE_MINUTES);
    options.Cookie.IsEssential = true;
});
```
// Swagger

```
services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "DevNcore", Version = "v1" };
}
```

// Configure
```
if (env.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "DevNcore v1"));
}

app.UseStatusCodePages();
app.UseHttpRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();
app.UseSession();
```

// Serilog
```
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Console()
    .WriteTo.File(env.IsDevelopment() ? "c:/logs_dev/log.txt" : "c:/logs_prd/log.txt")
    .CreateLogger();
logger.AddSerilog();
```

> AppTemplate

```
- ContentTemplate
- ContentHeader
- FilterTemplate
```

> default.css

```
.portal-root {
    height: 100%;
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
}

.portal-root .layout-frame {
    display: flex;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: calc(100vh - 64px);
}

.portal-root .layout-appbar {
    z-index: 10;
}

.portal-root .layout-appbar div {
    background-color: #223d80;
}

.portal-content .page-title {
    margin: 0px 0px 20px 0px;
}

.page-title .MuiButton-root {
    margin-left: 10px;
}

.page-title .func-area {
    display: flex;
    align-items: center;
    height: 68px;
}

.portal-content .search-area {
    margin: 0px 0px 0px 0px;
    background-color: #ffffff;
    height: calc(100vh - 172px);
}

.header-label {
    margin: 2px 0px 2px 0px;
    padding: 0px;
    font-size: 15px;
}

.header-label .text {
    padding: 0px 2px 3px 2px;
    color: #666666;
    font-size: 13px;
}

.layout-left {
    padding: 20px;
    margin: 0px 10px 0px 20px;
    border-radius: 0px;
}

.layout-right {
    padding: 0px;
    margin: 0px 20px 0px 10px;
    background-color: transparent;
    border-radius: 0px;
    border: 1px solid #dddddd;
}

.content-layout {
    padding: 20px;
}

.svg-list svg {
    width: 50px;
    height: 50px;
    margin: 5px;
}

.nav-layout {
    height: 264;
    flex-grow: 1;
    max-width: 400;
    padding: 0px;
    margin: 0;
    font-size: 14px;
}

.sitemap-header {
    padding: 5px 10px 5px 10px;
    margin: 0px;
    background-color: #fafafa;
}

.responsive-filter {
    padding: 0px;
    margin: 0px 10px 0px 20px;
    border-radius: 0px;
}

.portal-content .search-filter {
    padding: 0px 12px 0px 12px;
    height: calc(100% - 48px);
    overflow-y: auto;
}

.basic-datetimepicker div {
    height: 32px;
    font-size: 14px;
}
```

> axios
```
axios.get(url)
    .then(function (response) {
        console.log(response.data.results);
    })
    .catch(function (error) {
        // error
    })
    .then(function () {
        // finaly
    }
```

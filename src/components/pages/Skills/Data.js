import { ReactComponent as CLogo } from './Assets/c.svg'
import { ReactComponent as CssLogo } from './Assets/css.svg'
import { ReactComponent as DartLogo } from './Assets/dart.svg'
import { ReactComponent as FlutterLogo } from './Assets/flutter.svg'
import { ReactComponent as HtmlLogo } from './Assets/html.svg'
import { ReactComponent as JavaLogo } from './Assets/java.svg'
import { ReactComponent as JsLogo } from './Assets/javascript.svg'
import { ReactComponent as PhpLogo } from './Assets/php.svg'
import { ReactComponent as PythonLogo } from './Assets/python.svg'
import { ReactComponent as ReactLogo } from './Assets/react.svg'
import { ReactComponent as SqlLogo } from './Assets/sql.svg'
import { ReactComponent as GitLogo } from './Assets/git.svg'
import { ReactComponent as ReduxLogo } from './Assets/redux.svg'

const timelineElements = [
  {
    id: 1,
    title: "First Year",
    icons: [<CLogo className="element-icon"/>,<JavaLogo className="element-icon"/>]
  },
  {
    id: 2,
    title: "Second Year",
    icons: [<HtmlLogo className="element-icon"/>,<CssLogo className="element-icon"/>,<JsLogo className="element-icon"/>,<PhpLogo className="element-icon"/>,<SqlLogo className="element-icon"/>]
  },
  {
    id: 3,
    title: "Third Year",
    icons: [<PythonLogo className="element-icon"/>,<FlutterLogo className="element-icon"/>,<DartLogo className="element-icon"/>]
  },
  {
    id: 4,
    title: "Today",
    icons: [<ReactLogo className="element-icon"/>,<GitLogo className="element-icon"/>,<ReduxLogo className="element-icon"/>]
  },
];

export default timelineElements;
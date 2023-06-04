import React from 'react'

function Sidebar() {

    const [activeDisplay, setActiveDisplay] = useState('vitals');
  
    const handleLinkClick = (display) => {
      setActiveDisplay(display);
    };
  
    let displayComponent;
  
    if (activeDisplay === 'vitals') {
      displayComponent = <VitalsDisplay flashMessage={flashMessage}/>;
    } else if (activeDisplay === 'nutrition') {
      displayComponent = <SavedNutrition />;
    } else if (activeDisplay === 'symptoms') {
      displayComponent = <SavedSymptoms />
    } else if (activeDisplay === 'muscles') {
      displayComponent = <MuscleSearch />
    }

    return (
        <div className="col-12 col-md-3 p-0">
            <ul className="nav navbar-show flex-column">
                <h1 className="pt-4 pb-2 sh1">Organization</h1>
                <li className="nav-item">
                    <a className="nav-link" href="/#">
                        <span className="d-flex jusitfy-content-center">
                            <span className="icon icon-briefcase ms-1" />
                            My Job Feed
                        </span>
                    </a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/#">
                        <span className="d-flex jusitfy-content-center">
                            <span className="icon icon-user ms-1" style={{ marginRight: 20 }} />
                            Profile
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">
                        <span className="d-flex jusitfy-content-center">
                            <span className="icon icon-dashboard2" />
                            Dashboard
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">
                        <span className="d-flex jusitfy-content-center">
                            <span className="icon icon-save2" />
                            Saved Jobs
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">
                        <span className="d-flex jusitfy-content-center">
                            <span className="icon icon-settings" />
                            Setting
                        </span>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default Sidebar
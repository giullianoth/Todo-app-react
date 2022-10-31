import PageSection from "../page-section/page-section";

const TaskList = () => {
    return (
        <PageSection className="main_app_content_tasks">
            <ul className="main_app_content_tasks_list">
                <li className="completed">
                    <div><input type="checkbox" defaultChecked /></div>
                    <p>Complete online JavaScript course</p>
                    <div><i className="fa-solid fa-xmark"></i></div>
                </li>

                <li>
                    <div><input type="checkbox" /></div>
                    <p>Jog around the park 3x</p>
                    <div><i className="fa-solid fa-xmark"></i></div>
                </li>

                <li>
                    <div><input type="checkbox" /></div>
                    <p>10 minutes meditation</p>
                    <div><i className="fa-solid fa-xmark"></i></div>
                </li>

                <li>
                    <div><input type="checkbox" /></div>
                    <p>Read for 1 hour</p>
                    <div><i className="fa-solid fa-xmark"></i></div>
                </li>

                <li>
                    <div><input type="checkbox" /></div>
                    <p>Pick up groceries</p>
                    <div><i className="fa-solid fa-xmark"></i></div>
                </li>

                <li>
                    <div><input type="checkbox" /></div>
                    <p>Complete Todo App on Frontend Mentor</p>
                    <div><i className="fa-solid fa-xmark"></i></div>
                </li>
            </ul>
        </PageSection>
    );
}

export default TaskList;
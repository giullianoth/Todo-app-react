const Main = () => {
    return (
        <main className="main_app">
            <div className="main_app_content">
                <section className="main_app_content_input">
                    <form action="#">
                        <input type="text" name="new_task" id="new_task" />
                    </form>
                </section>

                <section className="main_app_content_tasks">
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
                </section>

                <section className="main_app_content_actions">
                    <div className="main_app_content_actions_count">
                        <span>5</span> items left
                    </div>

                    <div className="main_app_content_actions_clear">
                        <button>Clear Completed</button>
                    </div>
                </section>

                <section className="main_app_content_filter">
                    <button className="show_all">All</button>
                    <button className="show_active">Active</button>
                    <button className="show_completed">Completed</button>
                </section>
            </div>
        </main>
    );
}

export default Main;
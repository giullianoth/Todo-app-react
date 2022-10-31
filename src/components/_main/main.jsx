import TaskForm from "./task-form";
import TaskList from "./task-list";

const Main = () => {
    return (
        <main className="main_app">
            <div className="main_app_content">
                <TaskForm />
                <TaskList />

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
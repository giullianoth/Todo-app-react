import PageSection from "../page-section/page-section";

const TaskForm = () => {
    return (
        <PageSection className="main_app_content_input">
            <form action="#">
                <input type="text" name="new_task" id="new_task" placeholder="Create a new todo..." />
            </form>
        </PageSection>
    );
}

export default TaskForm;
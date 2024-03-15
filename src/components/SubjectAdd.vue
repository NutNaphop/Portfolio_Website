<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Subject
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Subject</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="subjectID" class="form-label">Subject ID</label>
                                <input type="text" class="form-control" id="subjectID">
                            </div>
                            <div class="mb-3">
                                <label for="subjectID" class="form-label">Semester and Year</label>
                                <select class="form-select" v-model="selectSem" @change="reqData(selectSem)">
                                    <option value="0" selected>Year 1 , Semester 1</option>
                                    <option value="1">Year 1 , Semester 2</option>
                                    <option value="2">Year 2 , Semester 1</option>
                                    <option value="3">Year 2 , Semester 2</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="subjectName" class="form-label">Subject Name</label>
                                <input type="text" class="form-control" id="subjectName">
                            </div>
                            <div class="mb-3">
                                <label for="credit" class="form-label">Credit</label>
                                <input type="number" class="form-control" id="credit">
                            </div>
                            <div class="mb-3">
                                <label for="grade" class="form-label">Grade</label>
                                <input type="text" class="form-control" id="grade">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SubjectAdd"
}
</script>
<template>
    <div>
        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>

        <!-- Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- ... rest of your modal code ... -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // ...
    data() {
        return {
            subject: {
                id: '',
                SName: '',
                Credit: '',
                Grade: ''
            },
            // ...
        };
    },
    // ...
};
</script>
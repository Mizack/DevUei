const { Router } = require("express");
const {
    create,
    read,
    list,
    update,
    deleteOne,
    userCoursesAcquired,
    acquireCourse,
    buyAllCourse,
    addComment,
    updateComment,
    deleteComment
} = require("../controllers/courses");

const coursesRoutes = Router();

coursesRoutes.post("/", create);
coursesRoutes.get("/read/:courseId", read);
coursesRoutes.get("/", list);
coursesRoutes.patch("/:courseId", update);
coursesRoutes.delete("/:courseId", deleteOne);
coursesRoutes.get("/acquired", userCoursesAcquired);
coursesRoutes.post("/acquire/:courseId", acquireCourse);
coursesRoutes.patch("/buy/:userCourseId", buyAllCourse);
coursesRoutes.post("/comment/:courseId", addComment);
coursesRoutes.patch("/comment/:commentId", updateComment);
coursesRoutes.delete("/comment/:commentId", deleteComment);

module.exports = coursesRoutes;

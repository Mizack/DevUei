const logger = require("../utils/logger");
const { Users, Courses, Comments,  UsersCourses, MonthlyPayment } = require("../models");
const msToHHMMSS = require("../helpers/msToHHMMSS");

const create = async (req, res) => {
    try {
        const { name, description, duration } = req.body;

        const user = await Users.findByPk(req.user);

        if (user.PERFIL) throw new Error("This profile cannot create, edit or delete courses");

        const course = await Courses.create({
            NOME: name,
            DURACAO: duration,
            DESCRICAO: description
        });

        res.status(201).send({ course });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const read = async (req, res) => {
    try {
        const course = await Courses.findByPk(req.params.courseId);

        if (!course) throw new Error("Course not found.");

        const user = await Users.findByPk(req.user);

        if (user.PERFIL) throw new Error("This profile cannot create, edit or delete courses");

        res.status(200).send({
            name: course.NOME,
            duration: msToHHMMSS(course.DURACAO),
            description: course.DESCRICAO
        });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const list = async (req, res) => {
    try {
        const findCourses = await Courses.findAll();

        const courses = findCourses.map(course => {
            return {
                name: course.NOME,
                duration: msToHHMMSS(course.DURACAO)
            };
        });
        res.status(200).send({ courses });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { name, description, duration } = req.body;

        const user = await Users.findByPk(req.user);

        if (user.PERFIL) throw new Error("This profile cannot create, edit or delete courses");

        const course = await Courses.findByPk(req.params.courseId);

        if (!course) throw new Error("Course not found.");

        const courseParsed = {
            NOME: name ? name : course.NOME,
            DURACAO: duration ? duration : course.DURACAO,
            DESCRICAO: description ? description : course.DESCRICAO
        };

        await course.update({ ...courseParsed });

        res.status(200).send({ course });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const deleteOne = async (req, res) => {
    try {
        const user = await Users.findByPk(req.user);

        if (user.PERFIL) throw new Error("This profile cannot create, edit or delete courses");

        const course = await Courses.findByPk(req.params.courseId);

        if (!course) throw new Error("Course not found.");

        await course.destroy();

        res.status(200).send({ courseDeleted: course });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const userCoursesAcquired = async (req, res) => {
    try {
        const userCourses = await UsersCourses.findOne({ where: { CURSO_USUARIO_ID_USUARIO: req.user } });

        res.status(200).send({ userCourses });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
}

const acquireCourse = async (req, res) => {
    try {
        const user = await Users.findByPk(req.user);

        if (!user.PERFIL) throw new Error("This profile cannot acquire courses, only regular users");

        const course = await Courses.findByPk(req.params.courseId);

        if (!course) throw new Error("Course not found.");

        const userCourse = await UsersCourses.create({
            ID_CURSO: req.params.courseId,
            CURSO_USUARIO_ID_USUARIO: req.user,
        });

        res.status(200).send({ userCourse });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const buyAllCourse = async (req, res) => {
    try {
        const { paymentday } = req.headers;

        const user = await Users.findByPk(req.user);

        if (!user.PERFIL) throw new Error("This profile cannot buy courses, only regular users");

        const userCourse = await UsersCourses.findByPk(req.params.userCourseId);

        if (!userCourse) throw new Error("Course not found.");

        await userCourse.update({
            DIA_VENCIMENTO: paymentday,
            SOMENTE_BASICO: 0,
            //Após integração do método de pagamento, a situação dependerá da confirmação do pagamento
            SITUACAO: 1
        });

        res.status(200).send({ userCourse });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const addComment = async (req, res) => {
    try {
        const { comment, rating } = req.body;

        if(rating > 5 || rating < 0) throw new Error("Rating must be between 0 and 5.")

        const course = await Courses.findByPk(req.params.courseId);

        if (!course) throw new Error("Course not found.");

        const creteComment = await Comments.create({
            COMENTARIO_ID_USUARIO: req.user,
            COMENTARIO_ID_CURSO: req.params.courseId,
            COMENTARIO: comment,
            AVALIACAO: rating
        });

        res.status(200).send({ comment: creteComment });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const updateComment = async (req, res) => {
    try {
        const { rating, comment } = req.body;

        if(rating && rating > 5 || rating < 0) throw new Error("Rating must be between 0 and 5.")

        const findComment = await Comments.findByPk(req.params.commentId);

        if (!findComment) throw new Error("Comment not found.");

        const commentParsed = {
            COMENTARIO: comment ? comment : findComment.COMENTARIO,
            AVALIACAO: rating ? rating : findComment.AVALIACAO
        };

        await Comments.update({ ...commentParsed });
        
        res.status(200).send({ comment: findComment });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const deleteComment = async (req, res) => {
    try {
        const comment = await Comments.findByPk(req.params.commentId);

        if (!comment) throw new Error("Comment not found.");

        await comment.destroy();

        res.status(200).send({ comment });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

module.exports = {
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
}

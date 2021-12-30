import { Router } from 'express'
import passport from 'passport'
import validatorReq from '../middlewares/validatorReq'
import Project from '../models/Project'
import User from '../models/User'
import sendResponse from '../utils/sendResponse'
import { modifyProject } from '../validators/projects'
const router = Router()

router.get('/', passport.authenticate('token'), async (req, res) => {
  try {
    const userFind = await User.findById(req.user._id)
    if (!userFind) {
      return sendResponse(res, 500, 'Error to find user')
    }
    const { projects } = await userFind.populate('projects')
    const { modeProjects } = await userFind.populate('modeProjects')
    const { workProjects } = await userFind.populate('workProjects')

    return sendResponse(res, 200, { projects, modeProjects, workProjects })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

router.get('/:id', passport.authenticate('token'), async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) {
      return sendResponse(res, 404, 'Your project doesn\'t exist')
    }

    return sendResponse(res, 200, { project })
  } catch (err) {
    return sendResponse(res, 200, err.message || 'Server error')
  }
})

router.post('/', passport.authenticate('token'), validatorReq(modifyProject(true), 'body'), async (req, res) => {
  try {
    const project = await Project.create({ ...req.body, owner: req.user._id })

    if (!project) {
      return sendResponse(res, 500, 'Error to create project')
    }

    req.user.projects.push(project._id)
    const newUser = await User.findByIdAndUpdate(req.user._id, { projects: req.user.projects })

    if (!newUser) {
      return sendResponse(res, 500, 'Error to add project')
    }

    return sendResponse(res, 200, { project })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

router.put('/:id', passport.authenticate('token'), validatorReq(modifyProject(false), 'body'), async (req, res) => {
  try {
    const projectUpdate = await Project.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })

    if (!projectUpdate) {
      return sendResponse(res, 500, 'Error to update project')
    }

    return sendResponse(res, 200, { project: projectUpdate })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

router.delete('/:id', passport.authenticate('token'), async (req, res) => {
  try {
    const findProject = await Project.findById(req.params.id)
    if (!findProject) {
      return sendResponse(res, 500, 'Project doesn\'t exist')
    }

    if (String(findProject.owner) !== String(req.user._id)) {
      return sendResponse(res, 401, 'You don\'t have permission to delete project')
    }

    const projectDelete = await Project.findByIdAndRemove(req.params.id)

    if (!projectDelete) {
      return sendResponse(res, 500, 'Error to delete project')
    }

    return sendResponse(res, 200, 'Project deleted')
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

export default router

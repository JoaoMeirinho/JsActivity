import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveria existir
// router.get('/', loginRequired, userController.index); // LIsta usuários
// router.get('/:id', userController.show); // Lista um usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
  index -> lista todos os usuários - GET
  store/create -> cria um novo usuário - POST
  delete -> apaga um usuário - DELETE
  show -> mostra um usuário - GET
  update -> atualiza um usuário - PATCH ou PUT
*/

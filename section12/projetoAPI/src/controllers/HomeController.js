import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Luiza',
      email: 'maria@gmail.com',
      idade: 105,
      peso: 365,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

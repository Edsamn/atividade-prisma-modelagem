import {Request, Response} from "express";
import db from "../database/prisma.connection";

class UsuarioController {
  public async create(req: Request, res: Response) {
    try {
      const {email, idade, nome, password, link_github} = req.body;
      await db.usuario.create({data: {email, idade, nome, password, link_github}});
      return res.status(200).json({success: true, msg: "Usuário criado."});
    } catch (error) {
      return res.status(500).json({success: true, msg: "Falha para criar usuário."});
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const usuarios = await db.usuario.findMany();

      return res.status(200).json({success: true, msg: "Lista de usuários.", data: usuarios});
    } catch (error) {
      return res.status(400).json({success: true, msg: "Falha ao listar usuários."});
    }
  }

  // const usuarios = await prisma.usuario.findMany({
  //   where: {
  //     nome: {
  //       contains: 'maria',
  //       mode: 'insensitive',
  //     },
}

export default UsuarioController;

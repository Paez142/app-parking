import { response } from "express";
import { pool } from "../db.js";

export const getUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (eror) {
    return res.status(500).json({ message: "Algo No Salio Bien" });
  }
};
export const getUsuario = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({ message: "Usuario No Encontrado" });
    res.json(rows[0]);
  } catch (eror) {
    return res.status(500).json({ message: "Algo No Salio Bien" });
  }
};

export const createUsuarios = async (req, res) => {
  const { user, password, tipo } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO usuarios (user, password, tipo) VALUES (?, ?, ?)",
      [user, password, tipo]
    );
    console.log(req.body);
    res.send({
      id: rows.insertId,
      user,
      password,
      tipo,
    });
  } catch (eror) {
    return res.status(500).json({ message: "Algo No Salio Bien" });
  }
};

export const deleteUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM usuarios WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.sendStatus(204);
  } catch (eror) {
    return res.status(500).json({ message: "Algo No Salio Bien" });
  }
};

export const updateUsuarios = async (req, res) => {
  const { id } = req.params;
  const { user, password, tipo } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE usuarios SET user = IFNULL(?, user), password = IFNULL(?, password), tipo = IFNULL(?, tipo) WHERE id = ?",
      [user, password, tipo, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Usuario No Encontrado" });

    const [rows] = await pool.query("SELECT * FROM usuarios WHERE id=?", [id]);
    res.json(rows[0]);
  } catch (eror) {
    return res.status(500).json({ message: "Algo No Salio Bien" });
  }
};

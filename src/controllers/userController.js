const User = require('../models/User');

// 1. Mostrar el formulario de Login
exports.mostrarLogin = (req, res) => {
  res.render('login', { titulo: 'Iniciar Sesión', error: null });
};

// 2. Mostrar el formulario de Registro
exports.mostrarRegistro = (req, res) => {
  res.render('registro', { titulo: 'Crear Cuenta', error: null });
};

// 3. Procesar el Registro de un nuevo Usuario
exports.registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
      return res.render('registro', {
        titulo: 'Crear Cuenta',
        error: 'El correo electrónico ya está registrado'
      });
    }

    // Crear y guardar el nuevo usuario
    const nuevoUsuario = new User({ nombre, email, password });
    await nuevoUsuario.save();

    // Redireccionar al login tras registro exitoso
    res.redirect('/usuarios/login');
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.render('registro', {
      titulo: 'Crear Cuenta',
      error: 'Ocurrió un error al intentar registrar el usuario'
    });
  }
};

// 4. Procesar el inicio de sesión (Login)
exports.loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar al usuario por correo
    const usuario = await User.findOne({ email });
    if (!usuario || usuario.password !== password) {
      return res.render('login', {
        titulo: 'Iniciar Sesión',
        error: 'Credenciales inválidas'
      });
    }

    // Si las credenciales son correctas (aquí luego se agregan sesiones o JWT)
    res.redirect('/clientes/catalogo');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.render('login', {
      titulo: 'Iniciar Sesión',
      error: 'Ocurrió un error al intentar iniciar sesión'
    });
  }
};
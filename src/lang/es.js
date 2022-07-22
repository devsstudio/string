exports.es = {
  verbs: {
    accept: "Aceptar",
    back: "Regresar",
    cancel: "Cancelar",
    change_color: "Cambiar color",
    change_password: "Cambiar contraseña",
    clear: "Limpiar",
    delete: "Eliminar",
    login: "Iniciar sesión",
    logout: "Cerrar sesión",
    recover_password: "Recuperar contraseña",
    sign_up: "Registrar",
    upload: "Subir",
    confirm: "Confirmar",
    recognize: "Reconocer",
    save_changes: "Guardar cambios",
    send_recovery_mail: "Enviar correo de recuperación",
    train: "Entrenar",
    update: "Actualizar",
  },
  labels: {
    alert: "Alerta",
    my_account: "Mi cuenta",
    no_data: "No hay datos disponibles",
    an_error_has_occurred: "Ha ocurrido un error",
  },
  forms: {
    login: {
      labels: {
        email_address: "Correo",
        username: "Nombre de usuario",
        password: "Contraseña",
        newPassword: "Nueva contraseña",
        confirmPassword: "Confirmar contraseña",
      },
      placeholders: {
        email_address: "Ingrese su correo",
        username: "Ingrese su nombre de usuario",
        password: "Ingrese su contraseña",
        newPassword: "Ingrese su nueva contraseña",
        confirmPassword: "Confirmar su nueva contraseña",
      },
      messages: {
        on401: "Por favor revise sus credenciales y vuelva a intentarlo",
        forgot_password: "¿Olvidó su contraseña?",
        recover_password: "Recuperar contraseña",
        has_no_account: "¿No tiene una cuenta aún?",
        changed: "La contraseña se cambió correctamente",
      },
    },
    signUp: {
      labels: {
        username: "Nombre de usuario",
        password: "Contraseña",
        confirmPassword: "Confirmar contraseña",
        name: "Nombre completo",
        email_address: "Correo",
        country_code: "Cod. Pais",
        phone_number: "Teléfono",
      },
      placeholders: {
        username: "Ingrese su nombre de usuario",
        password: "Escriba su contraseña",
        confirmPassword: "Confirmar contraseña",
        name: "Ingrese su nombre completo",
        email_address: "Escriba su correo",
        country_code: "Seleccione un código",
        phone_number: "Ingrese su número telefónico",
      },
      messages: {
        has_account: "¿Ya tiene una cuenta?",
        on400: "Hay errores de validación",
      },
    },
    confirmSignUp: {
      labels: {
        username: "Nombre de usuario",
        email_address: "Correo de usuario",
        code: "Código de confirmación",
        resend_code: "Reenviar código de confirmación",
      },
      placeholders: {
        code: "Ingrese su código de confirmación",
      },
      messages: {
        resend_code: "Código enviado correctamente",
        confirmed: "Usuario confirmado. Ya puede iniciar sesión",
        on400: "Hay errores de validación",
      },
    },
    changePassword: {
      labels: {
        email_address: "Correo de usuario",
        username: "Nombre de usuario",
        oldPassword: "Contraseña actual",
        newPassword: "Nueva contraseña",
        confirmPassword: "Confirmar contraseña",
      },
      placeholders: {
        oldPassword: "Ingrese su contraseña actual",
        newPassword: "Ingrese su nueva contraseña",
        confirmPassword: "Confirmar su nueva contraseña",
      },
      messages: {
        changed: "La contraseña se cambió correctamente",
        on400: "Hay errores de validación",
      },
    },
    forgotPassword: {
      labels: {
        email_address: "Correo de usuario",
        username: "Nombre de usuario",
      },
      placeholders: {
        email_address: "Escriba su correo",
        username: "Ingrese su nombre de usuario",
      },
      messages: {
        sended: "Correo enviado correctamente",
        on400: "Hay errores de validación",
      },
    },
    confirmForgotPassword: {
      labels: {
        email_address: "Correo de usuario",
        username: "Nombre de usuario",
        code: "Código de confirmación",
        newPassword: "Nueva contraseña",
        confirmPassword: "Confirmar contraseña",
        resend_code: "Reenviar código de confirmación",
      },
      placeholders: {
        email_address: "Escriba su correo",
        username: "Ingrese su nombre de usuario",
        code: "Ingrese su código de confirmación",
        newPassword: "Ingrese su nueva contraseña",
        confirmPassword: "Confirmar su nueva contraseña",
      },
      messages: {
        resend_code: "Código enviado correctamente",
        changed: "La contraseña se cambió correctamente",
        on400: "Hay errores de validación",
      },
    },
  },
};

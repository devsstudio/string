exports.en = {
  verbs: {
    accept: "Accept",
    back: "Back",
    cancel: "Cancel",
    change_color: "Change color",
    change_password: "Change password",
    clear: "Clear",
    delete: "Delete",
    login: "Login",
    logout: "Logout",
    recover_password: "Recover password",
    sign_up: "signUp",
    upload: "Upload",
    confirm: "Confirm",
    recognize: "Recognize",
    save_changes: "Save changes",
    send_recovery_mail: "Send recovery mail",
    train: "Train",
    update: "Update",
  },
  labels: {
    alert: "Alert",
    no_data: "No data available",
    my_account: "My account",
    success: "Success",
    successful_operation: "Successful operation",
    an_error_has_occurred: "An error has occurred",
  },
  forms: {
    login: {
      labels: {
        email_address: "Email",
        username: "Username",
        password: "Password",
        newPassword: "New password",
        confirmPassword: "Confirm new password",
      },
      placeholders: {
        email_address: "Enter your email",
        username: "Enter your username",
        password: "Enter your password",
        newPassword: "Enter new password",
        confirmPassword: "Confirm new password",
      },
      messages: {
        on401: "Please, check your credentials and try again.",
        forgot_password: "Forgot your password?",
        recover_password: "Recover password",
        has_no_account: "Don't have an account yet?",
        changed: "Password changed successfully",
      },
    },
    signUp: {
      labels: {
        username: "Username",
        password: "Password",
        name: "Name",
        confirmPassword: "Confirm password",
        email_address: "Email",
        country_code: "Country code",
        phone_number: "Phone number",
      },
      placeholders: {
        username: "Enter your username",
        password: "Enter your password",
        name: "Enter your name",
        confirmPassword: "Confirm password",
        email_address: "Enter your email",
        country_code: "Select a code",
        phone_number: "Enter your phone number",
      },
      messages: {
        has_account: "Have an account?",
        on400: "Validation error",
      },
    },
    confirmSignUp: {
      labels: {
        email_address: "User email",
        username: "Username",
        code: "Confirm code",
        resend_code: "Resend confirm code",
      },
      placeholders: {
        code: "Enter your confirm code",
      },
      messages: {
        resend_code: "Code resent successfully",
        confirmed: "Confirmed user. You can now log in",
        on400: "Validation error",
      },
    },
    changePassword: {
      labels: {
        email_address: "User email",
        username: "Username",
        oldPassword: "Current password",
        newPassword: "New password",
        confirmPassword: "Confirm new password",
      },
      placeholders: {
        oldPassword: "Enter current password",
        newPassword: "Enter new password",
        confirmPassword: "Confirm new password",
      },
      messages: {
        changed: "Password changed successfully",
        on400: "Validation error",
      },
    },
    forgotPassword: {
      labels: {
        email_address: "User email",
        username: "Username",
      },
      placeholders: {
        email_address: "Enter your email",
        username: "Enter username",
      },
      messages: {
        sended: "Mail sended succesfully",
        on400: "Validation error",
      },
    },
    confirmForgotPassword: {
      labels: {
        email_address: "User email",
        username: "Username",
        code: "Confirm code",
        newPassword: "New password",
        confirmPassword: "Confirm new password",
        resend_code: "Resend confirm code",
      },
      placeholders: {
        email_address: "Enter your email",
        username: "Enter your username",
        code: "Enter your confirm code",
        newPassword: "Enter new password",
        confirmPassword: "Confirm new password",
      },
      messages: {
        resend_code: "Code resent successfully",
        changed: "Password changed successfully",
        on400: "Validation error",
      },
    },
  },
};

import styles from "@/app/login/login.module.css";

export default function Login() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>Login</div>
        <div className={styles.content}></div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Email Address</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className={styles.passwordRow}>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className={styles.forgotPassword}>
              <span className={styles.forgotPasswordText}>
                Forgot Password?
              </span>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <div className={styles.rememberPassword}>
              <input
                type="checkbox"
                id="savePassword"
                className={styles.savePasswordCheckbox}
              />
              <label htmlFor="savePassword">Remember Password</label>
            </div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

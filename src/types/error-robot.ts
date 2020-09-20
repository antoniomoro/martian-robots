class ErrorRobot extends Error {
  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, ErrorRobot.prototype);
  }
}
export default ErrorRobot;

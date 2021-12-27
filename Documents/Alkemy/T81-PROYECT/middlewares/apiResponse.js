const apiResponse = (payload = {}) => {
  
    const DataSymbol = Symbol('data');
    const StatusSymbol = Symbol('status');
    const MessageSymbol = Symbol('message');
  
    class ApiResponse {
        constructor({ data = {}, status = 1, message = '' }) {
            this.data = data;
            this.status = status;
            this.message = message;
        }
  
        get data() {
          return this[DataSymbol];
        }
  
        set data(data) {
          if (typeof data === 'undefined')
              throw new Error('Data must be defined');
          this[DataSymbol] = data;
        }
  
        get status() {
          return this[StatusSymbol];
        }
  
        set status(status) {
          if (isNaN(status) || (status !== 0 && status !== 1))
            throw new Error('Status must be a number, 1 is OK, 0 is BAD');
          this[StatusSymbol] = status;
        }
  
        get message() {
          return this[MessageSymbol];
        }
  
        set message(message) {
          if (typeof message !== 'string')
            throw new Error('Message must be a string');
          this[MessageSymbol] = message;
        }
  
        toJSON() {
            return {
                data: this.data,
                status: this.status,
                message: this.message,
            }
        }
    }
  
    return new ApiResponse(payload);
  
  }
  
  module.exports = apiResponse;
  
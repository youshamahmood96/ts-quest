namespace NodeJS {
    interface ProcessEnv {
      DB_URI:string
      PORT:string
      JWT_SECRET:string
    }
}
namespace Express{
  interface Request{
    user?:userPayload
    session?: any
  }
}
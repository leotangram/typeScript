function error(message: string): never {
  throw new Error(message)
}

error('Error critico... linea 11 alcanzada...')

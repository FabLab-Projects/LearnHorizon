import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

export async function POST(request: Request): Promise<NextResponse> {
  /*
    * Funcion que se encarga de manejar las peticiones POST
    @ Param request: NextRequest - Peticion que se recibe del cliente
  */

  try {
    const body = await request.json()

    const response = await apiClient.post('/users', body)

    return NextResponse.json(response.data)
  } catch (error: any) {
    console.error('Error creating user', error.message)
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

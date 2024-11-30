import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateCameraSettingsDto {
  @ApiProperty({ example: 60, description: 'Campo de visión de la cámara' })
  @IsNumber()
  @IsOptional()
  fov?: number

  @ApiProperty({
    example: 0.5,
    description: 'Distancia al plano de recorte cercano'
  })
  @IsNumber()
  @IsOptional()
  near?: number

  @ApiProperty({
    example: 500,
    description: 'Distancia al plano de recorte lejano'
  })
  @IsNumber()
  @IsOptional()
  far?: number

  @ApiProperty({
    example: [10, 5, 15],
    description: 'Posición de la cámara en el espacio 3D (x, y, z)'
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  position?: [number, number, number]

  @ApiProperty({
    example: [0, 0, 0],
    description: 'Vector LookAt para la orientación de la cámara (x, y, z)'
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  lookAt?: [number, number, number]

  @ApiProperty({
    example: [0, 0, 0],
    description: 'Rotación de la cámara en el espacio 3D (x, y, z)'
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  rotation?: [number, number, number]

  @ApiProperty({
    example: 'perspectiva',
    description: 'Tipo de cámara (por ejemplo, perspectiva, ortográfica)'
  })
  @IsString()
  @IsOptional()
  cameraType?: string
}

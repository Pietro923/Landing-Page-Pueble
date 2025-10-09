// src/app/api/job-application/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extraer campos del formulario
    const nombre = formData.get('nombre') as string;
    const apellido = formData.get('apellido') as string;
    const email = formData.get('email') as string;
    const telefono = formData.get('telefono') as string;
    const areaInteres = formData.get('areaInteres') as string;
    const experiencia = formData.get('experiencia') as string;
    const nivelEstudio = formData.get('nivelEstudio') as string;
    const disponibilidad = formData.get('disponibilidad') as string;
    const mensaje = formData.get('mensaje') as string;
    const cvFile = formData.get('cv') as File;

    // Validaciones
    if (!nombre || !apellido || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
        { status: 400 }
      );
    }

    if (!cvFile || cvFile.size === 0) {
      return NextResponse.json(
        { error: 'Debes adjuntar tu CV en formato PDF' },
        { status: 400 }
      );
    }

    // Validar tipo de archivo
    if (cvFile.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'El CV debe ser un archivo PDF' },
        { status: 400 }
      );
    }

    // Validar tamaño (10MB máximo)
    if (cvFile.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'El archivo no debe superar los 10MB' },
        { status: 400 }
      );
    }

    // Convertir archivo a buffer
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

    // Configurar transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verificar conexión
    await transporter.verify();

    // Enviar email con adjunto
    const info = await transporter.sendMail({
      from: `"RRHH Web Pueble" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || 'recepcion@pueblemaquinarias.com.ar',
      replyTo: email,
      subject: `[POSTULACIÓN] ${nombre} ${apellido} - ${areaInteres}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 650px;
                margin: 20px auto;
                background: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #b71921 0%, #8f131a 100%);
                color: white;
                padding: 30px 20px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 26px;
                font-weight: 600;
              }
              .badge {
                display: inline-block;
                background: rgba(255, 255, 255, 0.2);
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 12px;
                margin-top: 10px;
              }
              .content {
                padding: 30px 20px;
              }
              .section {
                margin-bottom: 25px;
              }
              .section-title {
                font-size: 14px;
                font-weight: 600;
                color: #b71921;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 15px;
                padding-bottom: 8px;
                border-bottom: 2px solid #b71921;
              }
              .info-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
              }
              .info-item {
                background: #f9f9f9;
                padding: 12px;
                border-radius: 6px;
                border-left: 3px solid #b71921;
              }
              .info-label {
                font-size: 11px;
                color: #666;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .info-value {
                font-size: 14px;
                color: #333;
                font-weight: 500;
              }
              .message-box {
                background: #f9f9f9;
                border: 1px solid #e0e0e0;
                padding: 15px;
                border-radius: 6px;
                margin-top: 10px;
                white-space: pre-wrap;
              }
              .attachment-info {
                background: #fff9e6;
                border: 1px solid #ffd700;
                padding: 15px;
                border-radius: 6px;
                margin-top: 15px;
                text-align: center;
              }
              .footer {
                background: #f9f9f9;
                padding: 20px;
                text-align: center;
                border-top: 1px solid #e0e0e0;
              }
              .footer p {
                margin: 5px 0;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>💼 Nueva Postulación Laboral</h1>
                <div class="badge">Sistema Web - Trabaja con Nosotros</div>
              </div>
              
              <div class="content">
                <!-- Información Personal -->
                <div class="section">
                  <div class="section-title">👤 Información Personal</div>
                  <div class="info-grid">
                    <div class="info-item">
                      <div class="info-label">Nombre Completo</div>
                      <div class="info-value">${nombre} ${apellido}</div>
                    </div>
                    <div class="info-item">
                      <div class="info-label">Email</div>
                      <div class="info-value">${email}</div>
                    </div>
                    <div class="info-item">
                      <div class="info-label">Teléfono</div>
                      <div class="info-value">${telefono}</div>
                    </div>
                    <div class="info-item">
                      <div class="info-label">Área de Interés</div>
                      <div class="info-value">${areaInteres}</div>
                    </div>
                  </div>
                </div>

                <!-- Información Profesional -->
                <div class="section">
                  <div class="section-title">📚 Información Profesional</div>
                  <div class="info-grid">
                    <div class="info-item">
                      <div class="info-label">Nivel de Estudios</div>
                      <div class="info-value">${nivelEstudio}</div>
                    </div>
                    <div class="info-item">
                      <div class="info-label">Disponibilidad</div>
                      <div class="info-value">${disponibilidad}</div>
                    </div>
                  </div>
                  <div class="info-item" style="margin-top: 15px;">
                    <div class="info-label">Experiencia Laboral</div>
                    <div class="info-value">${experiencia}</div>
                  </div>
                </div>

                <!-- Mensaje -->
                <div class="section">
                  <div class="section-title">💬 Mensaje del Postulante</div>
                  <div class="message-box">${mensaje}</div>
                </div>

                <!-- Adjunto -->
                <div class="attachment-info">
                  <strong>📎 CV Adjunto:</strong> ${cvFile.name} (${(cvFile.size / 1024).toFixed(2)} KB)
                </div>
              </div>
              
              <div class="footer">
                <p><strong>📅 Fecha de Postulación:</strong> ${new Date().toLocaleString('es-AR', { 
                  timeZone: 'America/Argentina/Buenos_Aires',
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}</p>
                <p>Postulación recibida desde <strong>pueblemaquinarias.com.ar</strong></p>
                <p style="color: #999; margin-top: 15px;">Pueble S.A - RRHH</p>
              </div>
            </div>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: `CV_${nombre}_${apellido}.pdf`,
          content: cvBuffer,
          contentType: 'application/pdf',
        },
      ],
    });


    return NextResponse.json(
      { 
        success: true, 
        message: 'Postulación enviada correctamente',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error al enviar postulación:', error);
    
    let errorMessage = 'Error al enviar la postulación. Por favor intente nuevamente.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Error de autenticación del servidor de correo.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'No se pudo conectar al servidor de correo.';
    }

    return NextResponse.json(
      { error: errorMessage, details: process.env.NODE_ENV === 'development' ? error.message : undefined },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, correo, asunto, mensaje } = body;

    // Validación básica
    if (!nombre || !correo || !asunto || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Verificar que existan las variables de entorno
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('Faltan configuraciones SMTP. Revisa las variables de entorno.');
    }

    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    
    // Configurar transporter con SMTP de Ferozo
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465, // true para 465, false para 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 5000, // 5 segundos
      greetingTimeout: 5000,
      socketTimeout: 5000,
      tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
      }
    });

    // NO verificar conexión, enviar directamente para ahorrar tiempo
    // await transporter.verify();

    // Enviar email
    const info = await transporter.sendMail({
      from: `"Formulario Web Pueble" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || 'recepcion@pueblemaquinarias.com.ar',
      replyTo: correo,
      subject: `[Web] ${asunto}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
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
                font-size: 24px;
                font-weight: 600;
              }
              .header p {
                margin: 5px 0 0 0;
                font-size: 14px;
                opacity: 0.9;
              }
              .content {
                padding: 30px 20px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: #f9f9f9;
                border-left: 4px solid #b71921;
                border-radius: 4px;
              }
              .field-label {
                font-weight: 600;
                color: #b71921;
                margin-bottom: 5px;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .field-value {
                color: #333;
                font-size: 15px;
                word-wrap: break-word;
              }
              .message-field {
                background: #fff;
                border: 1px solid #e0e0e0;
                padding: 15px;
                border-radius: 4px;
                margin-top: 10px;
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
              .btn-reply {
                display: inline-block;
                margin-top: 20px;
                padding: 12px 30px;
                background: #b71921;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                font-weight: 600;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✉️ Nuevo Mensaje de Contacto</h1>
                <p>Sistema de Contacto Web - Pueble S.A</p>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="field-label">👤 Nombre Completo</div>
                  <div class="field-value">${nombre}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">📧 Correo Electrónico</div>
                  <div class="field-value">
                    <a href="mailto:${correo}" style="color: #b71921; text-decoration: none;">
                      ${correo}
                    </a>
                  </div>
                </div>
                
                <div class="field">
                  <div class="field-label">📋 Asunto</div>
                  <div class="field-value">${asunto}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">💬 Mensaje</div>
                  <div class="message-field">
                    ${mensaje.replace(/\n/g, '<br>')}
                  </div>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${correo}" class="btn-reply">
                    Responder a ${nombre}
                  </a>
                </div>
              </div>
              
              <div class="footer">
                <p><strong>📅 Fecha y Hora:</strong> ${new Date().toLocaleString('es-AR', { 
                  timeZone: 'America/Argentina/Buenos_Aires',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}</p>
                <p>Este mensaje fue enviado desde el formulario de contacto en <strong>pueblemaquinarias.com.ar</strong></p>
                <p style="color: #999; margin-top: 15px;">Pueble S.A - Ruta Nacional 9 KM 1301 - Tucumán, Argentina</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Email enviado:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email enviado correctamente',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error detallado al enviar email:', {
      message: error.message,
      code: error.code,
      command: error.command,
    });
    
    // Manejo específico de errores
    let errorMessage = 'Error al enviar el mensaje. Por favor intente nuevamente.';
    let statusCode = 500;
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Error de autenticación SMTP. Verifique las credenciales.';
      statusCode = 401;
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'No se pudo conectar al servidor de correo. Intente nuevamente.';
      statusCode = 503;
    } else if (error.message.includes('Timeout')) {
      errorMessage = 'El servidor de correo tardó mucho en responder. Intente nuevamente.';
      statusCode = 504;
    } else if (error.message.includes('variables de entorno')) {
      errorMessage = 'Configuración del servidor incompleta.';
      statusCode = 500;
    }

    return NextResponse.json(
      { 
        error: errorMessage, 
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
        code: error.code 
      },
      { status: statusCode }
    );
  }
}

// Las siguientes líneas no son necesarias si no tienes output: 'export'
// Si tienes problemas, puedes descomentar:
// export const dynamic = 'force-dynamic';
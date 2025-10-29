// src/app/api/contact/route.ts
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Enviar email con Resend
    const data = await resend.emails.send({
      from: 'Pueble <recepcion@pueblemaquinarias.com.ar>', // Cambiar por tu dominio verificado
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
                <p style="color: #999; margin-top: 15px;">Pueble S.A - Ruta Nacional 9 KM 1301 - Tafí Viejo, Tucumán, Argentina</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (data.error) {
      console.error('Error de Resend:', data.error);
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email enviado correctamente',
        id: data.data?.id 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error al enviar email:', error);
    
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor intente nuevamente.' },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';
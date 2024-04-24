import nodemailer, { Transporter } from 'nodemailer';

export interface OpcionesCorreo {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachements?: Attachement[];
}

export interface Attachement {
  filename: string;
  path: string;
}


export class CorreoService {
    private transporter: Transporter;

    constructor( mailerService: string, mailerCorreo: string, llaveCorreo: string) {
        this.transporter = nodemailer.createTransport( {
            service: mailerService,
            auth: {
              user: mailerCorreo,
              pass: llaveCorreo,
            }
        } );
    }




    async enviarCorreo( opciones: OpcionesCorreo ): Promise<boolean> {

        const { to, subject, htmlBody, attachements = [] } = opciones;


        try {

            const enviarInformacio = await this.transporter.sendMail( {
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachements,
            });
            return true;
        } catch ( error ) {
            return false;
        }

    }
}
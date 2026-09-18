import { useState } from "react";
import {
  Award,
  Download,
  X,
  CheckCircle,
  User
} from "lucide-react";
import { jsPDF } from "jspdf";

function CertificateModal({ onClose }) {
  const [step, setStep] = useState("name");

  const [sellerName, setSellerName] = useState(
    localStorage.getItem("kamtaliSellerName") || ""
  );

  const [downloading, setDownloading] =
    useState(false);

  const handleGenerateCertificate = () => {
    const cleanName = sellerName.trim();

    if (!cleanName) {
      return;
    }

    localStorage.setItem(
      "kamtaliSellerName",
      cleanName
    );

    setSellerName(cleanName);
    setStep("certificate");
  };

  const downloadCertificate = () => {
    setDownloading(true);

    try {
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4"
      });

      const pageWidth = 297;
      const pageHeight = 210;

      /*
       * FONDO
       */

      doc.setFillColor(250, 248, 243);

      doc.rect(
        0,
        0,
        pageWidth,
        pageHeight,
        "F"
      );


      /*
       * MARCO EXTERIOR
       */

      doc.setDrawColor(180, 150, 80);

      doc.setLineWidth(1.5);

      doc.rect(
        10,
        10,
        pageWidth - 20,
        pageHeight - 20
      );


      /*
       * MARCO INTERIOR
       */

      doc.setLineWidth(0.5);

      doc.rect(
        15,
        15,
        pageWidth - 30,
        pageHeight - 30
      );


      /*
       * SÍMBOLO
       */

      doc.setFontSize(28);

      doc.setTextColor(
        180,
        150,
        80
      );

      doc.text(
        "✦",
        pageWidth / 2,
        38,
        {
          align: "center"
        }
      );


      /*
       * TÍTULO
       */

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setFontSize(28);

      doc.setTextColor(
        35,
        35,
        35
      );

      doc.text(
        "CERTIFICADO DE FINALIZACIÓN",
        pageWidth / 2,
        58,
        {
          align: "center"
        }
      );


      /*
       * ACADEMIA
       */

      doc.setFont(
        "helvetica",
        "normal"
      );

      doc.setFontSize(15);

      doc.setTextColor(
        110,
        90,
        50
      );

      doc.text(
        "ACADEMIA KAMTALI",
        pageWidth / 2,
        70,
        {
          align: "center"
        }
      );


      /*
       * TEXTO
       */

      doc.setFontSize(12);

      doc.setTextColor(
        70,
        70,
        70
      );

      doc.text(
        "Se otorga el presente certificado a",
        pageWidth / 2,
        88,
        {
          align: "center"
        }
      );


      /*
       * NOMBRE
       */

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setFontSize(25);

      doc.setTextColor(
        30,
        30,
        30
      );

      doc.text(
        sellerName,
        pageWidth / 2,
        105,
        {
          align: "center"
        }
      );


      /*
       * LÍNEA
       */

      doc.setDrawColor(
        180,
        150,
        80
      );

      doc.setLineWidth(0.4);

      doc.line(
        85,
        110,
        212,
        110
      );


      /*
       * DESCRIPCIÓN
       */

      doc.setFont(
        "helvetica",
        "normal"
      );

      doc.setFontSize(11);

      doc.setTextColor(
        70,
        70,
        70
      );

      doc.text(
        "por haber completado satisfactoriamente todos los niveles de capacitación",
        pageWidth / 2,
        125,
        {
          align: "center"
        }
      );

      doc.text(
        "de la Academia Kamtali y formar parte de nuestra comunidad de vendedores.",
        pageWidth / 2,
        133,
        {
          align: "center"
        }
      );


      /*
       * NIVEL
       */

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setFontSize(15);

      doc.setTextColor(
        110,
        90,
        50
      );

      doc.text(
        "VENDEDOR KAMTALI PRO",
        pageWidth / 2,
        151,
        {
          align: "center"
        }
      );


      /*
       * FECHA
       */

      const date = new Date();

      const formattedDate =
        date.toLocaleDateString(
          "es-MX",
          {
            day: "numeric",
            month: "long",
            year: "numeric"
          }
        );

      doc.setFont(
        "helvetica",
        "normal"
      );

      doc.setFontSize(10);

      doc.setTextColor(
        90,
        90,
        90
      );

      doc.text(
        `Fecha de finalización: ${formattedDate}`,
        pageWidth / 2,
        169,
        {
          align: "center"
        }
      );


      /*
       * KAMTALI
       */

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setFontSize(13);

      doc.setTextColor(
        35,
        35,
        35
      );

      doc.text(
        "Kamtali Travel",
        pageWidth / 2,
        184,
        {
          align: "center"
        }
      );


      doc.setFont(
        "helvetica",
        "italic"
      );

      doc.setFontSize(9);

      doc.setTextColor(
        110,
        110,
        110
      );

      doc.text(
        "Donde tus sueños toman vuelo",
        pageWidth / 2,
        191,
        {
          align: "center"
        }
      );


      /*
       * NOMBRE DEL ARCHIVO
       */

      const safeName =
        sellerName
          .replace(
            /[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]/g,
            ""
          )
          .replace(
            /\s+/g,
            "-"
          );


      doc.save(
        `Certificado-Kamtali-${safeName}.pdf`
      );

    } catch (error) {

      console.error(
        "Error al generar certificado:",
        error
      );

      alert(
        "No pudimos generar el certificado. Inténtalo nuevamente."
      );

    } finally {

      setDownloading(false);

    }
  };


  return (

    <div
      className="certificate-overlay"
      onClick={onClose}
    >

      <div
        className="certificate-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        {/* CERRAR */}

        <button
          className="certificate-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>


        {/* ======================
            PASO 1
        ====================== */}

        {step === "name" && (

          <>

            <div className="certificate-icon">
              <Award size={42} />
            </div>


            <span className="certificate-label">
              ACADEMIA KAMTALI
            </span>


            <h2>
              🎉 ¡Has completado toda
              <br />
              la Academia Kamtali!
            </h2>


            <p className="certificate-message">
              ¡Felicidades! Has completado
              todos los niveles de capacitación.
            </p>


            <p>
              Para preparar tu certificado,
              necesitamos saber cómo quieres
              que aparezca tu nombre.
            </p>


            <div className="certificate-input-wrapper">

              <User size={19} />

              <input
                type="text"
                value={sellerName}
                onChange={(e) =>
                  setSellerName(
                    e.target.value
                  )
                }
                placeholder="Escribe tu nombre completo"
                autoFocus
                onKeyDown={(e) => {

                  if (
                    e.key === "Enter" &&
                    sellerName.trim()
                  ) {

                    handleGenerateCertificate();

                  }

                }}
              />

            </div>


            <button
              className="download-certificate-button"
              onClick={
                handleGenerateCertificate
              }
              disabled={
                !sellerName.trim()
              }
            >

              <Award size={20} />

              Generar mi certificado

            </button>


            <button
              className="certificate-secondary-button"
              onClick={onClose}
            >
              Lo haré después
            </button>

          </>

        )}


        {/* ======================
            PASO 2
        ====================== */}

        {step === "certificate" && (

          <>

            <div className="certificate-icon certificate-success">
              <CheckCircle size={42} />
            </div>


            <span className="certificate-label">
              ¡CERTIFICADO LISTO!
            </span>


            <h2>
              🏆 ¡Felicidades!
            </h2>


            <p className="certificate-message">

              <strong>
                {sellerName}
              </strong>

            </p>


            <p>
              Has completado exitosamente
              todos los niveles de la
              Academia Kamtali.
            </p>


            <div className="certificate-achievement">

              <CheckCircle size={20} />

              <span>
                Vendedor Kamtali PRO
              </span>

            </div>


            <button
              className="download-certificate-button"
              onClick={
                downloadCertificate
              }
              disabled={downloading}
            >

              <Download size={20} />

              {downloading
                ? "Generando certificado..."
                : "Descargar mi certificado"}

            </button>


            <button
              className="certificate-secondary-button"
              onClick={onClose}
            >
              Continuar en la Academia
            </button>

          </>

        )}

      </div>

    </div>

  );
}

export default CertificateModal;
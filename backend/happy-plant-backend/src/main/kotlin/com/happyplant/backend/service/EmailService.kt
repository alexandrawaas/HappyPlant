package com.happyplant.backend.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.MimeMessageHelper
import org.springframework.stereotype.Service
import java.net.URLEncoder
import com.happyplant.backend.model.User

@Service
class EmailService {

    @Autowired
    private lateinit var mailSender: JavaMailSender

    fun sendResetPasswordEmail(user: User, resetPasswordCode: Int) {
        val recipientAddress = user.email.lowercase()
        val subject = "Passwort zurücksetzen oder ändern"

        val message = mailSender.createMimeMessage()
        val helper = MimeMessageHelper(message, true, "UTF-8")
        helper.setTo(recipientAddress)
        helper.setSubject(subject)

        val htmlContent = """
            <p>Sie erhalten diese Nachricht, weil Sie (oder jemand anders) das Password für Ihren Account zurücksetzen oder ändern möchte.</p>
            <p>Bitte geben Sie folgenden Code in der Happy-Plants-App ein, um Ihr Passwort zurückzusetzen oder zu ändern:</p>
            <h2>$resetPasswordCode</h2>
            <p>Wenn Sie Ihr Passwort nicht zurücksetzen oder ändern möchten, ignorieren Sie diese Email und Ihr Passwort bleibt unverändert.</p>
        """.trimIndent()

        helper.setText(htmlContent, true)
        mailSender.send(message)
    }

    fun sendEmailVerificationEmail(user: User, emailVerificationToken: String) {
        val recipientAddress = user.email.lowercase()
        val subject = "Email-Adresse verifizieren"
        val encodedToken = URLEncoder.encode(emailVerificationToken, "UTF-8")
        val verificationUrl = "http://localhost:8080/auth/verify?token=$encodedToken"

        val message = mailSender.createMimeMessage()
        val helper = MimeMessageHelper(message, true, "UTF-8")
        helper.setTo(recipientAddress)
        helper.setSubject(subject)

        val htmlContent = """
            <p>Vielen Dank, dass Sie sich einen Account bei uns angelegt haben!</p>
            <p>Bitte klicken Sie auf den folgenden Link oder kopieren Sie ihn in Ihren Browser, um Ihre Email-Adresse zu verifizieren:</p>
            <a href="$verificationUrl">Email-Adresse verifizieren</a>
        """.trimIndent()

        helper.setText(htmlContent, true)
        mailSender.send(message)
    }
}

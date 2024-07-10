package com.happyplant.backend.repository

import com.happyplant.backend.model.ResetPasswordOtp
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface ResetPasswordOtpRepository : JpaRepository<ResetPasswordOtp, UUID> {
}

package com.happyplant.backend.repository

import com.happyplant.backend.model.VerifyEmailOtp
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface VerifyEmailOtpRepository : JpaRepository<VerifyEmailOtp, UUID> {
}

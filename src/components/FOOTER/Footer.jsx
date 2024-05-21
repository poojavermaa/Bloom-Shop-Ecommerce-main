import React from "react";
import './footer.css'

export default function Footer() {
    return (
        <div className="mainfooter">
            <div className="item about">
                <h4>ABOUT</h4>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Stories</li>
                    <li>Press</li>
                    <li>Wholesale</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div className="item help">
                <h4>HELP</h4>
                <ul>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQs</li>
                    <li>Report Infringement</li>
                </ul>
            </div>
            <div className="item policy">
                <h4>POLICY</h4>
                <ul>
                    <li>Return Policy</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>EPR Compliance</li>
                </ul>
            </div>
            <div className="item social">
                <h4>SOCIAL</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
    )
}
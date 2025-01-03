<!doctype html>
<html lang="en" class="dark">

<?php include './partials/head.php' ?>

<body class="bg-colorIvory">

    <div class="page-wrapper">
        
        <!-- ...::: Header Section Start :::... -->
        <?php include './partials/header.php' ?>
        <!-- ...::: Header Section End :::... -->

        <?php 

            if (isset($subTitle)) {
                ?>
                <main class="main-wrapper">
                <?php include './partials/breadcrumb.php' ?>
                <?php
            }
        ?>

